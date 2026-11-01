/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_eduCourse } from "../EduCourseSchema/id-eduCourse.va.mjs";
// export { id_eduCourse } from "../EduCourseSchema/id-eduCourse.va.mjs";


/**
 * @summary id_at_eduCourseMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-eduCourseMember       OBJECT IDENTIFIER ::= { id-eduCourse 1 2 }
 * ```
 * 
 * @constant
 */
export
const id_at_eduCourseMember: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
    2,
], id_eduCourse);

/* eslint-enable */
