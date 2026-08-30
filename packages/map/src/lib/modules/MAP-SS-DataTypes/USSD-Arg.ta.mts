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
import { USSD_DataCodingScheme, _decode_USSD_DataCodingScheme, _encode_USSD_DataCodingScheme } from "../MAP-SS-DataTypes/USSD-DataCodingScheme.ta.mjs";
// export { USSD_DataCodingScheme, _decode_USSD_DataCodingScheme, _encode_USSD_DataCodingScheme } from "../MAP-SS-DataTypes/USSD-DataCodingScheme.ta.mjs";
import { USSD_String, _decode_USSD_String, _encode_USSD_String } from "../MAP-SS-DataTypes/USSD-String.ta.mjs";
// export { USSD_String, _decode_USSD_String, _encode_USSD_String } from "../MAP-SS-DataTypes/USSD-String.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary USSD_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USSD-Arg ::= SEQUENCE {
 *     ussd-DataCodingScheme    USSD-DataCodingScheme,
 *     ussd-String    USSD-String,
 *     ... ,
 *     alertingPattern    AlertingPattern    OPTIONAL,
 *     msisdn    [0] ISDN-AddressString    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class USSD_Arg {
    constructor (
        /**
         * @summary `ussd_DataCodingScheme`.
         * @public
         * @readonly
         */
        readonly ussd_DataCodingScheme: USSD_DataCodingScheme,
        /**
         * @summary `ussd_String`.
         * @public
         * @readonly
         */
        readonly ussd_String: USSD_String,
        /**
         * @summary `alertingPattern`.
         * @public
         * @readonly
         */
        readonly alertingPattern: OPTIONAL<AlertingPattern>,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a USSD_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `USSD_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `USSD_Arg`.
     * @returns {USSD_Arg}
     */
    public static _from_object (_o: { [_K in keyof (USSD_Arg)]: (USSD_Arg)[_K] }): USSD_Arg {
        return new USSD_Arg(_o.ussd_DataCodingScheme, _o.ussd_String, _o.alertingPattern, _o.msisdn, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of USSD_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_USSD_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("ussd-DataCodingScheme", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ussd-String", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of USSD_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_USSD_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of USSD_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_USSD_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

let _cached_decoder_for_USSD_Arg: $.ASN1Decoder<USSD_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) USSD_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_USSD_Arg (el: _Element): USSD_Arg {
    if (!_cached_decoder_for_USSD_Arg) { _cached_decoder_for_USSD_Arg = function (el: _Element): USSD_Arg {
    let ussd_DataCodingScheme!: USSD_DataCodingScheme;
    let ussd_String!: USSD_String;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let msisdn: OPTIONAL<ISDN_AddressString>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ussd-DataCodingScheme": (_el: _Element): void => { ussd_DataCodingScheme = _decode_USSD_DataCodingScheme(_el); },
        "ussd-String": (_el: _Element): void => { ussd_String = _decode_USSD_String(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = _decode_AlertingPattern(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_USSD_Arg,
        _extension_additions_list_spec_for_USSD_Arg,
        _root_component_type_list_2_spec_for_USSD_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new USSD_Arg(
        ussd_DataCodingScheme,
        ussd_String,
        alertingPattern,
        msisdn,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_USSD_Arg(el);
}

let _cached_encoder_for_USSD_Arg: $.ASN1Encoder<USSD_Arg> | null = null;

/**
 * @summary Encodes a(n) USSD_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The USSD_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_USSD_Arg (value: USSD_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_USSD_Arg) { _cached_encoder_for_USSD_Arg = function (value: USSD_Arg, elGetter: $.ASN1Encoder<USSD_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_USSD_DataCodingScheme(value.ussd_DataCodingScheme, $.BER),
            /* REQUIRED   */ _encode_USSD_String(value.ussd_String, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.alertingPattern === undefined) ? undefined : _encode_AlertingPattern(value.alertingPattern, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_USSD_Arg(value, elGetter);
}


/* eslint-enable */
