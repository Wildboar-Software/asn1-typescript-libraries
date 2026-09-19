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
import { DeviationListVersion, DeviationListVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DeviationListVersion, _encode_DeviationListVersion } from "../DeviationList/DeviationListVersion.ta.mjs";
// export { DeviationListVersion, DeviationListVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DeviationListVersion, _encode_DeviationListVersion } from "../DeviationList/DeviationListVersion.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Deviation, _decode_Deviation, _encode_Deviation } from "../DeviationList/Deviation.ta.mjs";
// export { Deviation, _decode_Deviation, _encode_Deviation } from "../DeviationList/Deviation.ta.mjs";


/**
 * @summary DeviationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviationList ::= SEQUENCE {
 *     version DeviationListVersion,
 *     digestAlgorithm AlgorithmIdentifier OPTIONAL,
 *     deviations SET OF Deviation
 * }
 * ```
 * 
 * @class
 */
export
class DeviationList {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: DeviationListVersion,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `deviations`.
         * @public
         * @readonly
         */
        readonly deviations: Deviation[]
    ) {}

    /**
     * @summary Restructures an object into a DeviationList
     * @description
     * 
     * This takes an `object` and converts it to a `DeviationList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviationList`.
     * @returns {DeviationList}
     */
    public static _from_object (_o: { [_K in keyof (DeviationList)]: (DeviationList)[_K] }): DeviationList {
        return new DeviationList(_o.version, _o.digestAlgorithm, _o.deviations);
    }


}

/**
 * @summary The Leading Root Component Types of DeviationList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviationList: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("digestAlgorithm", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("deviations", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of DeviationList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviationList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviationList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviationList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviationList: $.ASN1Decoder<DeviationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviationList (el: _Element): DeviationList {
    if (!_cached_decoder_for_DeviationList) { _cached_decoder_for_DeviationList = function (el: _Element): DeviationList {
    let version!: DeviationListVersion;
    let digestAlgorithm: OPTIONAL<AlgorithmIdentifier>;
    let deviations!: Deviation[];
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_DeviationListVersion(_el); },
        "digestAlgorithm": (_el: _Element): void => { digestAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "deviations": (_el: _Element): void => { deviations = $._decodeSetOf<Deviation>(() => _decode_Deviation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviationList,
        _extension_additions_list_spec_for_DeviationList,
        _root_component_type_list_2_spec_for_DeviationList,
        undefined,
    );
    return new DeviationList(
        version,
        digestAlgorithm,
        deviations
    );
}; }
    return _cached_decoder_for_DeviationList(el);
}

let _cached_encoder_for_DeviationList: $.ASN1Encoder<DeviationList> | null = null;

/**
 * @summary Encodes a(n) DeviationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviationList, encoded as an ASN.1 Element.
 */
export
function _encode_DeviationList (value: DeviationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviationList) { _cached_encoder_for_DeviationList = function (value: DeviationList, elGetter: $.ASN1Encoder<DeviationList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviationListVersion(value.version, $.BER),
            /* IF_ABSENT  */ ((value.digestAlgorithm === undefined) ? undefined : _encode_AlgorithmIdentifier(value.digestAlgorithm, $.BER)),
            /* REQUIRED   */ $._encodeSetOf<Deviation>(() => _encode_Deviation, $.BER)(value.deviations, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviationList(value, elGetter);
}


/* eslint-enable */
