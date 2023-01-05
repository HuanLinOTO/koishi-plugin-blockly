import {middlewareBlock, MiddlewareBlock} from "./processing";
import {
  breakMiddlewareBlock,
  BreakMiddlewareBlock, ReturnMessageBlock,
  returnMessageBlock, SegmentAtBlock, segmentAtBlock, segmentImageBlock, SegmentImageBlock,
  sendSessionMessageBlock,
  SendSessionMessageBlock, sessionMessageBlock, SessionMessageBlock, sessionUserIdBlock, SessionUserIdBlock
} from "./session";

export const Blocks = [
  MiddlewareBlock,
  SendSessionMessageBlock,
  BreakMiddlewareBlock,
  ReturnMessageBlock,
  SessionMessageBlock,
  SessionUserIdBlock,
  SegmentAtBlock,
  SegmentImageBlock
]

export const BlockGenerators={
  'middleware':middlewareBlock,
  'send_session_message':sendSessionMessageBlock,
  'break_middleware':breakMiddlewareBlock,
  'return_message':returnMessageBlock,
  'session_message':sessionMessageBlock,
  'session_user_id':sessionUserIdBlock,
  'segment_at':segmentAtBlock,
  'segment_image':segmentImageBlock
}
