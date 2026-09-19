/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SimpleIndication {
    call_Waiting_Indication = 0,
    add_conf_Indication = 1,
    call_on_hold_Indication = 2,
    retrieve_Indication = 3,
    suspend_Indication = 4,
    resume_Indication = 5,
    answer_Indication = 6,
}

/**
 * @summary SimpleIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleIndication  ::=  ENUMERATED
 * {
 *     call-Waiting-Indication(0),
 *         -- The target has received a call waiting indication for this call
 *     add-conf-Indication(1),
 *         -- this call has been added to a conference
 *     call-on-hold-Indication(2),
 *         -- indication that this call is on hold
 *     retrieve-Indication(3),
 *         -- indication that this call has been retrieved
 *     suspend-Indication(4),
 *         -- indication that this call has been suspended
 *     resume-Indication(5),
 *         -- indication that this call has been resumed
 *     answer-Indication(6),
 *         -- indication that this call has been answered
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SimpleIndication = _enum_for_SimpleIndication | ENUMERATED;

/**
 * @summary SimpleIndication_call_Waiting_Indication
 * @constant
 * @type {number}
 */
export
const SimpleIndication_call_Waiting_Indication: SimpleIndication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call_Waiting_Indication
 * @constant
 * @type {number}
 */
export
const call_Waiting_Indication: SimpleIndication = SimpleIndication_call_Waiting_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_add_conf_Indication
 * @constant
 * @type {number}
 */
export
const SimpleIndication_add_conf_Indication: SimpleIndication = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary add_conf_Indication
 * @constant
 * @type {number}
 */
export
const add_conf_Indication: SimpleIndication = SimpleIndication_add_conf_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_call_on_hold_Indication
 * @constant
 * @type {number}
 */
export
const SimpleIndication_call_on_hold_Indication: SimpleIndication = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call_on_hold_Indication
 * @constant
 * @type {number}
 */
export
const call_on_hold_Indication: SimpleIndication = SimpleIndication_call_on_hold_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_retrieve_Indication
 * @constant
 * @type {number}
 */
export
const SimpleIndication_retrieve_Indication: SimpleIndication = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieve_Indication
 * @constant
 * @type {number}
 */
export
const retrieve_Indication: SimpleIndication = SimpleIndication_retrieve_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_suspend_Indication
 * @constant
 * @type {number}
 */
export
const SimpleIndication_suspend_Indication: SimpleIndication = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend_Indication
 * @constant
 * @type {number}
 */
export
const suspend_Indication: SimpleIndication = SimpleIndication_suspend_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_resume_Indication
 * @constant
 * @type {number}
 */
export
const SimpleIndication_resume_Indication: SimpleIndication = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resume_Indication
 * @constant
 * @type {number}
 */
export
const resume_Indication: SimpleIndication = SimpleIndication_resume_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SimpleIndication_answer_Indication
 * @constant
 * @type {number}
 */
export
const SimpleIndication_answer_Indication: SimpleIndication = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answer_Indication
 * @constant
 * @type {number}
 */
export
const answer_Indication: SimpleIndication = SimpleIndication_answer_Indication; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SimpleIndication: $.ASN1Decoder<SimpleIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SimpleIndication (el: _Element): SimpleIndication {
    if (!_cached_decoder_for_SimpleIndication) { _cached_decoder_for_SimpleIndication = $._decodeEnumerated; }
    return _cached_decoder_for_SimpleIndication(el);
}

let _cached_encoder_for_SimpleIndication: $.ASN1Encoder<SimpleIndication> | null = null;

/**
 * @summary Encodes a(n) SimpleIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleIndication, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleIndication (value: SimpleIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SimpleIndication) { _cached_encoder_for_SimpleIndication = $._encodeEnumerated; }
    return _cached_encoder_for_SimpleIndication(value, elGetter);
}


/* eslint-enable */
