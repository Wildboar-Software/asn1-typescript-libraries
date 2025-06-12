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
    RefusedArgument,
    RefusedArgument_user_name /* IMPORTED_LONG_NAMED_INTEGER */,
    user_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_user_address /* IMPORTED_LONG_NAMED_INTEGER */,
    user_address /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_deliverable_content_types /* IMPORTED_LONG_NAMED_INTEGER */,
    deliverable_content_types /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_deliverable_maximum_content_length /* IMPORTED_LONG_NAMED_INTEGER */,
    deliverable_maximum_content_length /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_deliverable_encoded_information_types_constraints /* IMPORTED_LONG_NAMED_INTEGER */,
    deliverable_encoded_information_types_constraints /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_deliverable_security_labels /* IMPORTED_LONG_NAMED_INTEGER */,
    deliverable_security_labels /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_recipient_assigned_redirections /* IMPORTED_LONG_NAMED_INTEGER */,
    recipient_assigned_redirections /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_restricted_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    restricted_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_retrieve_registrations /* IMPORTED_LONG_NAMED_INTEGER */,
    retrieve_registrations /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_restrict /* IMPORTED_LONG_NAMED_INTEGER */,
    restrict /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_operations /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_operations /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_lowest_priority /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_lowest_priority /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_encoded_information_types /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_encoded_information_types /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_content_types /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_content_types /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_maximum_content_length /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_maximum_content_length /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_security_context /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_security_context /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RefusedArgument,
    _encode_RefusedArgument,
} from '../MTSAbstractService/RefusedArgument.ta.js';
export {
    RefusedArgument,
    RefusedArgument_user_name /* IMPORTED_LONG_NAMED_INTEGER */,
    user_name /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_user_address /* IMPORTED_LONG_NAMED_INTEGER */,
    user_address /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_deliverable_content_types /* IMPORTED_LONG_NAMED_INTEGER */,
    deliverable_content_types /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_deliverable_maximum_content_length /* IMPORTED_LONG_NAMED_INTEGER */,
    deliverable_maximum_content_length /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_deliverable_encoded_information_types_constraints /* IMPORTED_LONG_NAMED_INTEGER */,
    deliverable_encoded_information_types_constraints /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_deliverable_security_labels /* IMPORTED_LONG_NAMED_INTEGER */,
    deliverable_security_labels /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_recipient_assigned_redirections /* IMPORTED_LONG_NAMED_INTEGER */,
    recipient_assigned_redirections /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_restricted_delivery /* IMPORTED_LONG_NAMED_INTEGER */,
    restricted_delivery /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_retrieve_registrations /* IMPORTED_LONG_NAMED_INTEGER */,
    retrieve_registrations /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_restrict /* IMPORTED_LONG_NAMED_INTEGER */,
    restrict /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_operations /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_operations /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_lowest_priority /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_lowest_priority /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_encoded_information_types /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_encoded_information_types /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_content_types /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_content_types /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_maximum_content_length /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_maximum_content_length /* IMPORTED_SHORT_NAMED_INTEGER */,
    RefusedArgument_permissible_security_context /* IMPORTED_LONG_NAMED_INTEGER */,
    permissible_security_context /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RefusedArgument,
    _encode_RefusedArgument,
} from '../MTSAbstractService/RefusedArgument.ta.js';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.js';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.js';
import {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from "./ExtensionType.ta.js";

/* START_OF_SYMBOL_DEFINITION RefusedOperation_refused_argument */
/**
 * @summary RefusedOperation_refused_argument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefusedOperation-refused-argument ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RefusedOperation_refused_argument =
    | { built_in_argument: RefusedArgument } /* CHOICE_ALT_ROOT */
    | { refused_extension: ExtensionType } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RefusedOperation_refused_argument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusedOperation_refused_argument */
let _cached_decoder_for_RefusedOperation_refused_argument: $.ASN1Decoder<RefusedOperation_refused_argument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RefusedOperation_refused_argument */

/* START_OF_SYMBOL_DEFINITION _decode_RefusedOperation_refused_argument */
/**
 * @summary Decodes an ASN.1 element into a(n) RefusedOperation_refused_argument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefusedOperation_refused_argument} The decoded data structure.
 */
export function _decode_RefusedOperation_refused_argument(el: _Element) {
    if (!_cached_decoder_for_RefusedOperation_refused_argument) {
        _cached_decoder_for_RefusedOperation_refused_argument = $._decode_inextensible_choice<RefusedOperation_refused_argument>(
            {
                'CONTEXT 1': [
                    'built_in_argument',
                    $._decode_implicit<RefusedArgument>(
                        () => _decode_RefusedArgument
                    ),
                ],
                '*': ['refused_extension', _decode_ExtensionType],
            }
        );
    }
    return _cached_decoder_for_RefusedOperation_refused_argument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RefusedOperation_refused_argument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusedOperation_refused_argument */
let _cached_encoder_for_RefusedOperation_refused_argument: $.ASN1Encoder<RefusedOperation_refused_argument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RefusedOperation_refused_argument */

/* START_OF_SYMBOL_DEFINITION _encode_RefusedOperation_refused_argument */
/**
 * @summary Encodes a(n) RefusedOperation_refused_argument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefusedOperation_refused_argument, encoded as an ASN.1 Element.
 */
export function _encode_RefusedOperation_refused_argument(
    value: RefusedOperation_refused_argument,
    elGetter: $.ASN1Encoder<RefusedOperation_refused_argument>
) {
    if (!_cached_encoder_for_RefusedOperation_refused_argument) {
        _cached_encoder_for_RefusedOperation_refused_argument = $._encode_choice<RefusedOperation_refused_argument>(
            {
                built_in_argument: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RefusedArgument,
                    $.BER
                ),
                refused_extension: _encode_ExtensionType,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RefusedOperation_refused_argument(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_RefusedOperation_refused_argument */

/* eslint-enable */
