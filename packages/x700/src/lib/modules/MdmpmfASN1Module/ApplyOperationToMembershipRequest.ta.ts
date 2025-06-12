/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SetArgument,
    _decode_SetArgument,
    _encode_SetArgument,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/SetArgument.ta.js';
export {
    SetArgument,
    _decode_SetArgument,
    _encode_SetArgument,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/SetArgument.ta.js';
import {
    ActionArgument,
    _decode_ActionArgument,
    _encode_ActionArgument,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionArgument.ta.js';
export {
    ActionArgument,
    _decode_ActionArgument,
    _encode_ActionArgument,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ActionArgument.ta.js';
import {
    GetArgument,
    _decode_GetArgument,
    _encode_GetArgument,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetArgument.ta.js';
export {
    GetArgument,
    _decode_GetArgument,
    _encode_GetArgument,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/GetArgument.ta.js';

/* START_OF_SYMBOL_DEFINITION ApplyOperationToMembershipRequest */
/**
 * @summary ApplyOperationToMembershipRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplyOperationToMembershipRequest  ::=  CHOICE {
 *   set     [0] IMPLICIT SetArgument,
 *   action  [1] IMPLICIT ActionArgument,
 *   get     [2] IMPLICIT GetArgument
 * }
 * ```
 */
export type ApplyOperationToMembershipRequest =
    | { set_: SetArgument } /* CHOICE_ALT_ROOT */
    | { action: ActionArgument } /* CHOICE_ALT_ROOT */
    | { get_: GetArgument } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ApplyOperationToMembershipRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplyOperationToMembershipRequest */
let _cached_decoder_for_ApplyOperationToMembershipRequest: $.ASN1Decoder<ApplyOperationToMembershipRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplyOperationToMembershipRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ApplyOperationToMembershipRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplyOperationToMembershipRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplyOperationToMembershipRequest} The decoded data structure.
 */
export function _decode_ApplyOperationToMembershipRequest(el: _Element) {
    if (!_cached_decoder_for_ApplyOperationToMembershipRequest) {
        _cached_decoder_for_ApplyOperationToMembershipRequest = $._decode_inextensible_choice<ApplyOperationToMembershipRequest>(
            {
                'CONTEXT 0': [
                    'set_',
                    $._decode_implicit<SetArgument>(() => _decode_SetArgument),
                ],
                'CONTEXT 1': [
                    'action',
                    $._decode_implicit<ActionArgument>(
                        () => _decode_ActionArgument
                    ),
                ],
                'CONTEXT 2': [
                    'get_',
                    $._decode_implicit<GetArgument>(() => _decode_GetArgument),
                ],
            }
        );
    }
    return _cached_decoder_for_ApplyOperationToMembershipRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplyOperationToMembershipRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplyOperationToMembershipRequest */
let _cached_encoder_for_ApplyOperationToMembershipRequest: $.ASN1Encoder<ApplyOperationToMembershipRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplyOperationToMembershipRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ApplyOperationToMembershipRequest */
/**
 * @summary Encodes a(n) ApplyOperationToMembershipRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyOperationToMembershipRequest, encoded as an ASN.1 Element.
 */
export function _encode_ApplyOperationToMembershipRequest(
    value: ApplyOperationToMembershipRequest,
    elGetter: $.ASN1Encoder<ApplyOperationToMembershipRequest>
) {
    if (!_cached_encoder_for_ApplyOperationToMembershipRequest) {
        _cached_encoder_for_ApplyOperationToMembershipRequest = $._encode_choice<ApplyOperationToMembershipRequest>(
            {
                set_: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SetArgument,
                    $.BER
                ),
                action: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ActionArgument,
                    $.BER
                ),
                get_: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_GetArgument,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ApplyOperationToMembershipRequest(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplyOperationToMembershipRequest */

/* eslint-enable */
