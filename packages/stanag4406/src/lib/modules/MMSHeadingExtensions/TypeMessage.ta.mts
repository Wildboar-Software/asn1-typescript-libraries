/* eslint-disable */
import {
    type ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TypeMessage
 * @description
 * 
 * Which kind of activity a military message belongs to. Integers 0 to 127 are
 * reserved for NATO. Integers 128 to 255 are not defined by NATO and may be
 * used nationally or bilaterally. STANAG 4406 (Ed. 2), Annex A, A1.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeMessage  ::=  INTEGER {exercise(0), operation(1), project(2), drill(3)}
 * ```
 */
export
type TypeMessage = INTEGER;

/**
 * @summary TypeMessage_exercise
 * @description
 *
 * The message relates to an exercise (integer 0). Integers 0 to 127 are
 * reserved for NATO message-type identifiers. STANAG 4406 (Ed. 2), Annex A,
 * A1.10 and B.103.
 * @constant
 * @type {number}
 */
export
const TypeMessage_exercise: TypeMessage = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_exercise
 * @description
 *
 * The message relates to an exercise (integer 0). Integers 0 to 127 are
 * reserved for NATO message-type identifiers. STANAG 4406 (Ed. 2), Annex A,
 * A1.10 and B.103.
 * @constant
 * @type {number}
 */
export
const exercise: TypeMessage = TypeMessage_exercise; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_operation
 * @description
 *
 * The message relates to an operation (integer 1). STANAG 4406 (Ed. 2), Annex
 * A, A1.10 and B.103.
 * @constant
 * @type {number}
 */
export
const TypeMessage_operation: TypeMessage = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_operation
 * @description
 *
 * The message relates to an operation (integer 1). STANAG 4406 (Ed. 2), Annex
 * A, A1.10 and B.103.
 * @constant
 * @type {number}
 */
export
const operation: TypeMessage = TypeMessage_operation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_project
 * @description
 *
 * The message relates to a project (integer 2). STANAG 4406 (Ed. 2), Annex A,
 * A1.10 and B.103.
 * @constant
 * @type {number}
 */
export
const TypeMessage_project: TypeMessage = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_project
 * @description
 *
 * The message relates to a project (integer 2). STANAG 4406 (Ed. 2), Annex A,
 * A1.10 and B.103.
 * @constant
 * @type {number}
 */
export
const project: TypeMessage = TypeMessage_project; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_drill
 * @description
 *
 * The message relates to a drill (integer 3). STANAG 4406 (Ed. 2), Annex A,
 * A1.10 and B.103.
 * @constant
 * @type {number}
 */
export
const TypeMessage_drill: TypeMessage = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TypeMessage_drill
 * @description
 *
 * The message relates to a drill (integer 3). STANAG 4406 (Ed. 2), Annex A,
 * A1.10 and B.103.
 * @constant
 * @type {number}
 */
export
const drill: TypeMessage = TypeMessage_drill; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TypeMessage: $.ASN1Decoder<TypeMessage> = $._decodeInteger;
export const _encode_TypeMessage: $.ASN1Encoder<TypeMessage> = $._encodeInteger;


/* eslint-enable */
