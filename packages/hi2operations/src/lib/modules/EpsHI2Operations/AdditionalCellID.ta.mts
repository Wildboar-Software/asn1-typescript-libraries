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
import { NCGI, _decode_NCGI, _encode_NCGI } from "../EpsHI2Operations/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../EpsHI2Operations/NCGI.ta.mjs";
import { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../HI2Operations/GSMLocation.ta.mjs";
// export { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../HI2Operations/GSMLocation.ta.mjs";
import { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../HI2Operations/UMTSLocation.ta.mjs";
// export { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../HI2Operations/UMTSLocation.ta.mjs";


/**
 * @summary AdditionalCellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCellID ::= SEQUENCE
 * {
 *  nCGI [1] NCGI,
 *  gsmLocation [2] GSMLocation OPTIONAL,
 *  umtsLocation [3] UMTSLocation OPTIONAL,
 *  timeOfLocation [4] GeneralizedTime OPTIONAL,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class AdditionalCellID {
    constructor (
        /**
         * @summary `nCGI`.
         * @public
         * @readonly
         */
        readonly nCGI: NCGI,
        /**
         * @summary `gsmLocation`.
         * @public
         * @readonly
         */
        readonly gsmLocation: OPTIONAL<GSMLocation>,
        /**
         * @summary `umtsLocation`.
         * @public
         * @readonly
         */
        readonly umtsLocation: OPTIONAL<UMTSLocation>,
        /**
         * @summary `timeOfLocation`.
         * @public
         * @readonly
         */
        readonly timeOfLocation: OPTIONAL<GeneralizedTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AdditionalCellID
     * @description
     * 
     * This takes an `object` and converts it to a `AdditionalCellID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalCellID`.
     * @returns {AdditionalCellID}
     */
    public static _from_object (_o: { [_K in keyof (AdditionalCellID)]: (AdditionalCellID)[_K] }): AdditionalCellID {
        return new AdditionalCellID(_o.nCGI, _o.gsmLocation, _o.umtsLocation, _o.timeOfLocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AdditionalCellID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AdditionalCellID: $.ComponentSpec[] = [
    new $.ComponentSpec("nCGI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gsmLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("umtsLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeOfLocation", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AdditionalCellID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AdditionalCellID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AdditionalCellID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AdditionalCellID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AdditionalCellID: $.ASN1Decoder<AdditionalCellID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalCellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalCellID (el: _Element): AdditionalCellID {
    if (!_cached_decoder_for_AdditionalCellID) { _cached_decoder_for_AdditionalCellID = function (el: _Element): AdditionalCellID {
    let nCGI!: NCGI;
    let gsmLocation: OPTIONAL<GSMLocation>;
    let umtsLocation: OPTIONAL<UMTSLocation>;
    let timeOfLocation: OPTIONAL<GeneralizedTime>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "nCGI": (_el: _Element): void => { nCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "gsmLocation": (_el: _Element): void => { gsmLocation = $._decode_explicit<GSMLocation>(() => _decode_GSMLocation)(_el); },
        "umtsLocation": (_el: _Element): void => { umtsLocation = $._decode_explicit<UMTSLocation>(() => _decode_UMTSLocation)(_el); },
        "timeOfLocation": (_el: _Element): void => { timeOfLocation = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AdditionalCellID,
        _extension_additions_list_spec_for_AdditionalCellID,
        _root_component_type_list_2_spec_for_AdditionalCellID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AdditionalCellID(
        nCGI,
        gsmLocation,
        umtsLocation,
        timeOfLocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AdditionalCellID(el);
}

let _cached_encoder_for_AdditionalCellID: $.ASN1Encoder<AdditionalCellID> | null = null;

/**
 * @summary Encodes a(n) AdditionalCellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalCellID, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalCellID (value: AdditionalCellID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalCellID) { _cached_encoder_for_AdditionalCellID = function (value: AdditionalCellID, elGetter: $.ASN1Encoder<AdditionalCellID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NCGI, $.BER)(value.nCGI, $.BER),
            /* IF_ABSENT  */ ((value.gsmLocation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GSMLocation, $.BER)(value.gsmLocation, $.BER)),
            /* IF_ABSENT  */ ((value.umtsLocation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_UMTSLocation, $.BER)(value.umtsLocation, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLocation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeGeneralizedTime, $.BER)(value.timeOfLocation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AdditionalCellID(value, elGetter);
}


/* eslint-enable */
