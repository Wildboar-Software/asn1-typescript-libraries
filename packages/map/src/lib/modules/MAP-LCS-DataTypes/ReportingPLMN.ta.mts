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
import { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
// export { PLMN_Id, _decode_PLMN_Id, _encode_PLMN_Id } from "../MAP-CommonDataTypes/PLMN-Id.ta.mjs";
import { RAN_Technology, _enum_for_RAN_Technology, RAN_Technology_gsm /* IMPORTED_LONG_ENUMERATION_ITEM */, gsm /* IMPORTED_SHORT_ENUMERATION_ITEM */, RAN_Technology_umts /* IMPORTED_LONG_ENUMERATION_ITEM */, umts /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RAN_Technology, _encode_RAN_Technology } from "../MAP-LCS-DataTypes/RAN-Technology.ta.mjs";
// export { RAN_Technology, _enum_for_RAN_Technology, RAN_Technology_gsm /* IMPORTED_LONG_ENUMERATION_ITEM */, gsm /* IMPORTED_SHORT_ENUMERATION_ITEM */, RAN_Technology_umts /* IMPORTED_LONG_ENUMERATION_ITEM */, umts /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RAN_Technology, _encode_RAN_Technology } from "../MAP-LCS-DataTypes/RAN-Technology.ta.mjs";


/**
 * @summary ReportingPLMN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingPLMN ::= SEQUENCE {
 *     plmn-Id        [0] PLMN-Id,
 *     ran-Technology        [1] RAN-Technology    OPTIONAL,
 *     ran-PeriodicLocationSupport    [2] NULL        OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ReportingPLMN {
    constructor (
        /**
         * @summary `plmn_Id`.
         * @public
         * @readonly
         */
        readonly plmn_Id: PLMN_Id,
        /**
         * @summary `ran_Technology`.
         * @public
         * @readonly
         */
        readonly ran_Technology: OPTIONAL<RAN_Technology>,
        /**
         * @summary `ran_PeriodicLocationSupport`.
         * @public
         * @readonly
         */
        readonly ran_PeriodicLocationSupport: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReportingPLMN
     * @description
     * 
     * This takes an `object` and converts it to a `ReportingPLMN`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportingPLMN`.
     * @returns {ReportingPLMN}
     */
    public static _from_object (_o: { [_K in keyof (ReportingPLMN)]: (ReportingPLMN)[_K] }): ReportingPLMN {
        return new ReportingPLMN(_o.plmn_Id, _o.ran_Technology, _o.ran_PeriodicLocationSupport, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `ran_Technology`
         * @public
         * @static
         */

    public static _enum_for_ran_Technology = _enum_for_RAN_Technology;
}

/**
 * @summary The Leading Root Component Types of ReportingPLMN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportingPLMN: $.ComponentSpec[] = [
    new $.ComponentSpec("plmn-Id", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ran-Technology", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ran-PeriodicLocationSupport", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ReportingPLMN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportingPLMN: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportingPLMN
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportingPLMN: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportingPLMN: $.ASN1Decoder<ReportingPLMN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingPLMN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportingPLMN (el: _Element): ReportingPLMN {
    if (!_cached_decoder_for_ReportingPLMN) { _cached_decoder_for_ReportingPLMN = function (el: _Element): ReportingPLMN {
    let plmn_Id!: PLMN_Id;
    let ran_Technology: OPTIONAL<RAN_Technology>;
    let ran_PeriodicLocationSupport: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "plmn-Id": (_el: _Element): void => { plmn_Id = $._decode_implicit<PLMN_Id>(() => _decode_PLMN_Id)(_el); },
        "ran-Technology": (_el: _Element): void => { ran_Technology = $._decode_implicit<RAN_Technology>(() => _decode_RAN_Technology)(_el); },
        "ran-PeriodicLocationSupport": (_el: _Element): void => { ran_PeriodicLocationSupport = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportingPLMN,
        _extension_additions_list_spec_for_ReportingPLMN,
        _root_component_type_list_2_spec_for_ReportingPLMN,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReportingPLMN(
        plmn_Id,
        ran_Technology,
        ran_PeriodicLocationSupport,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReportingPLMN(el);
}

let _cached_encoder_for_ReportingPLMN: $.ASN1Encoder<ReportingPLMN> | null = null;

/**
 * @summary Encodes a(n) ReportingPLMN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingPLMN, encoded as an ASN.1 Element.
 */
export
function _encode_ReportingPLMN (value: ReportingPLMN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportingPLMN) { _cached_encoder_for_ReportingPLMN = function (value: ReportingPLMN, elGetter: $.ASN1Encoder<ReportingPLMN>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PLMN_Id, $.BER)(value.plmn_Id, $.BER),
            /* IF_ABSENT  */ ((value.ran_Technology === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RAN_Technology, $.BER)(value.ran_Technology, $.BER)),
            /* IF_ABSENT  */ ((value.ran_PeriodicLocationSupport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.ran_PeriodicLocationSupport, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportingPLMN(value, elGetter);
}


/* eslint-enable */
