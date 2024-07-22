import {
  Controller,
  Get,
  Query,
  DefaultValuePipe,
  Body,
  Post,
  Param,
} from '@nestjs/common';
import { MeetingRoomService } from './meeting-room.service';
import { generateParseIntPipe } from 'src/utils';
import { ApiTags } from '@nestjs/swagger';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
@ApiTags('会议房间')
@Controller('meeting-room')
export class MeetingRoomController {
  constructor(private readonly meetingRoomService: MeetingRoomService) {}

  @Get('list')
  async list(
    @Query('pageNo', new DefaultValuePipe(1), generateParseIntPipe('pageNo'))
    pageNo: number,
    @Query(
      'pageSize',
      new DefaultValuePipe(2),
      generateParseIntPipe('pageSize'),
    )
    pageSize: number,
    @Query('name') name: string,
    @Query('capacity') capacity: number,
    @Query('equipment') equipment: string,
  ) {
    return await this.meetingRoomService.find(
      pageNo,
      pageSize,
      name,
      capacity,
      equipment,
    );
  }

  @Post('create')
  async create(@Body() meetingRoomDto: CreateMeetingRoomDto) {
    return await this.meetingRoomService.create(meetingRoomDto);
  }
  @Get(':id')
  async find(@Param('id') id: number) {
    return await this.meetingRoomService.findById(id);
  }
}
