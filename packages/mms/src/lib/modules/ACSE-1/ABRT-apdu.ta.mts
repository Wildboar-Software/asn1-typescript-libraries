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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ABRT_source, ABRT_source_acse_service_user /* IMPORTED_LONG_NAMED_INTEGER */, acse_service_user /* IMPORTED_SHORT_NAMED_INTEGER */, ABRT_source_acse_service_provider /* IMPORTED_LONG_NAMED_INTEGER */, acse_service_provider /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ABRT_source, _encode_ABRT_source } from "../ACSE-1/ABRT-source.ta.mjs";
// export { ABRT_source, ABRT_source_acse_service_user /* IMPORTED_LONG_NAMED_INTEGER */, acse_service_user /* IMPORTED_SHORT_NAMED_INTEGER */, ABRT_source_acse_service_provider /* IMPORTED_LONG_NAMED_INTEGER */, acse_service_provider /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ABRT_source, _encode_ABRT_source } from "../ACSE-1/ABRT-source.ta.mjs";
import { ABRT_diagnostic, _enum_for_ABRT_diagnostic, ABRT_diagnostic_no_reason_given /* IMPORTED_LONG_ENUMERATION_ITEM */, no_reason_given /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_protocol_error /* IMPORTED_LONG_ENUMERATION_ITEM */, protocol_error /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_authentication_mechanism_name_not_recognized /* IMPORTED_LONG_ENUMERATION_ITEM */, authentication_mechanism_name_not_recognized /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_authentication_mechanism_name_required /* IMPORTED_LONG_ENUMERATION_ITEM */, authentication_mechanism_name_required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_authentication_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, authentication_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_authentication_required /* IMPORTED_LONG_ENUMERATION_ITEM */, authentication_required /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ABRT_diagnostic, _encode_ABRT_diagnostic } from "../ACSE-1/ABRT-diagnostic.ta.mjs";
// export { ABRT_diagnostic, _enum_for_ABRT_diagnostic, ABRT_diagnostic_no_reason_given /* IMPORTED_LONG_ENUMERATION_ITEM */, no_reason_given /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_protocol_error /* IMPORTED_LONG_ENUMERATION_ITEM */, protocol_error /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_authentication_mechanism_name_not_recognized /* IMPORTED_LONG_ENUMERATION_ITEM */, authentication_mechanism_name_not_recognized /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_authentication_mechanism_name_required /* IMPORTED_LONG_ENUMERATION_ITEM */, authentication_mechanism_name_required /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_authentication_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, authentication_failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ABRT_diagnostic_authentication_required /* IMPORTED_LONG_ENUMERATION_ITEM */, authentication_required /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ABRT_diagnostic, _encode_ABRT_diagnostic } from "../ACSE-1/ABRT-diagnostic.ta.mjs";
import { Association_information, _decode_Association_information, _encode_Association_information } from "../ACSE-1/Association-information.ta.mjs";
// export { Association_information, _decode_Association_information, _encode_Association_information } from "../ACSE-1/Association-information.ta.mjs";


/**
 * @summary ABRT_apdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ABRT-apdu ::= [APPLICATION 4] IMPLICIT SEQUENCE {
 *   abort-source      [0] IMPLICIT ABRT-source,
 *   abort-diagnostic  [1] IMPLICIT ABRT-diagnostic OPTIONAL,
 *   --  This field shall not be present if only the Kernel is used.
 *   ...,
 *   ...,
 *   user-information  [30] IMPLICIT Association-information OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ABRT_apdu {
    constructor (
        /**
         * @summary `abort_source`.
         * @public
         * @readonly
         */
        readonly abort_source: ABRT_source,
        /**
         * @summary `abort_diagnostic`.
         * @public
         * @readonly
         */
        readonly abort_diagnostic: OPTIONAL<ABRT_diagnostic>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: OPTIONAL<Association_information>
    ) {}

    /**
     * @summary Restructures an object into a ABRT_apdu
     * @description
     * 
     * This takes an `object` and converts it to a `ABRT_apdu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ABRT_apdu`.
     * @returns {ABRT_apdu}
     */
    public static _from_object (_o: { [_K in keyof (ABRT_apdu)]: (ABRT_apdu)[_K] }): ABRT_apdu {
        return new ABRT_apdu(_o.abort_source, _o.abort_diagnostic, _o._unrecognizedExtensionsList, _o.user_information);
    }

        /**
         * @summary The enum used as the type of the component `abort_diagnostic`
         * @public
         * @static
         */

    public static _enum_for_abort_diagnostic = _enum_for_ABRT_diagnostic;
}

/**
 * @summary The Leading Root Component Types of ABRT_apdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ABRT_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec("abort-source", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("abort-diagnostic", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ABRT_apdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ABRT_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec("user-information", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Extension Addition Component Types of ABRT_apdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ABRT_apdu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ABRT_apdu: $.ASN1Decoder<ABRT_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_apdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ABRT_apdu (el: _Element): ABRT_apdu {
    if (!_cached_decoder_for_ABRT_apdu) { _cached_decoder_for_ABRT_apdu = $._decode_implicit<ABRT_apdu>(() => function (el: _Element): ABRT_apdu {
    let abort_source!: ABRT_source;
    let abort_diagnostic: OPTIONAL<ABRT_diagnostic>;
    let _unrecognizedExtensionsList: _Element[] = [];
    let user_information: OPTIONAL<Association_information>;
    const callbacks: $.DecodingMap = {
        "abort-source": (_el: _Element): void => { abort_source = $._decode_implicit<ABRT_source>(() => _decode_ABRT_source)(_el); },
        "abort-diagnostic": (_el: _Element): void => { abort_diagnostic = $._decode_implicit<ABRT_diagnostic>(() => _decode_ABRT_diagnostic)(_el); },
        "user-information": (_el: _Element): void => { user_information = $._decode_implicit<Association_information>(() => _decode_Association_information)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ABRT_apdu,
        _extension_additions_list_spec_for_ABRT_apdu,
        _root_component_type_list_2_spec_for_ABRT_apdu,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ABRT_apdu(
        abort_source,
        abort_diagnostic,
        _unrecognizedExtensionsList,
        user_information
    );
}); }
    return _cached_decoder_for_ABRT_apdu(el);
}

let _cached_encoder_for_ABRT_apdu: $.ASN1Encoder<ABRT_apdu> | null = null;

/**
 * @summary Encodes a(n) ABRT_apdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_apdu, encoded as an ASN.1 Element.
 */
export
function _encode_ABRT_apdu (value: ABRT_apdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ABRT_apdu) { _cached_encoder_for_ABRT_apdu = $._encode_implicit(_TagClass.application, 4, () => function (value: ABRT_apdu, elGetter: $.ASN1Encoder<ABRT_apdu>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ABRT_source, $.BER)(value.abort_source, $.BER),
            /* IF_ABSENT  */ ((value.abort_diagnostic === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ABRT_diagnostic, $.BER)(value.abort_diagnostic, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            /* IF_ABSENT  */ ((value.user_information === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_Association_information, $.BER)(value.user_information, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ABRT_apdu(value, elGetter);
}


/* eslint-enable */
