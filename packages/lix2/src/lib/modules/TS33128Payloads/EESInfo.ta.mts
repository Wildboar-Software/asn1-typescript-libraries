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
import { EESID, _decode_EESID, _encode_EESID } from "../TS33128Payloads/EESID.ta.mjs";
// export { EESID, _decode_EESID, _encode_EESID } from "../TS33128Payloads/EESID.ta.mjs";
import { EESEndpoint, _decode_EESEndpoint, _encode_EESEndpoint } from "../TS33128Payloads/EESEndpoint.ta.mjs";
// export { EESEndpoint, _decode_EESEndpoint, _encode_EESEndpoint } from "../TS33128Payloads/EESEndpoint.ta.mjs";
import { EASIDs, _decode_EASIDs, _encode_EASIDs } from "../TS33128Payloads/EASIDs.ta.mjs";
// export { EASIDs, _decode_EASIDs, _encode_EASIDs } from "../TS33128Payloads/EASIDs.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { DNAIs, _decode_DNAIs, _encode_DNAIs } from "../TS33128Payloads/DNAIs.ta.mjs";
// export { DNAIs, _decode_DNAIs, _encode_DNAIs } from "../TS33128Payloads/DNAIs.ta.mjs";


/**
 * @summary EESInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESInfo ::= SEQUENCE
 * {
 *     eESID          [1] EESID,
 *     eESEndpoint    [2] EESEndpoint,
 *     eASIDs         [3] EASIDs OPTIONAL,
 *     serviceArea    [4] Location OPTIONAL,
 *     dNAIS          [5] DNAIs OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESInfo {
    constructor (
        /**
         * @summary `eESID`.
         * @public
         * @readonly
         */
        readonly eESID: EESID,
        /**
         * @summary `eESEndpoint`.
         * @public
         * @readonly
         */
        readonly eESEndpoint: EESEndpoint,
        /**
         * @summary `eASIDs`.
         * @public
         * @readonly
         */
        readonly eASIDs: OPTIONAL<EASIDs>,
        /**
         * @summary `serviceArea`.
         * @public
         * @readonly
         */
        readonly serviceArea: OPTIONAL<Location>,
        /**
         * @summary `dNAIS`.
         * @public
         * @readonly
         */
        readonly dNAIS: OPTIONAL<DNAIs>
    ) {}

    /**
     * @summary Restructures an object into a EESInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EESInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESInfo`.
     * @returns {EESInfo}
     */
    public static _from_object (_o: { [_K in keyof (EESInfo)]: (EESInfo)[_K] }): EESInfo {
        return new EESInfo(_o.eESID, _o.eESEndpoint, _o.eASIDs, _o.serviceArea, _o.dNAIS);
    }


}

/**
 * @summary The Leading Root Component Types of EESInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("eESID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eESEndpoint", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eASIDs", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serviceArea", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dNAIS", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EESInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESInfo: $.ASN1Decoder<EESInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESInfo (el: _Element): EESInfo {
    if (!_cached_decoder_for_EESInfo) { _cached_decoder_for_EESInfo = function (el: _Element): EESInfo {
    let eESID!: EESID;
    let eESEndpoint!: EESEndpoint;
    let eASIDs: OPTIONAL<EASIDs>;
    let serviceArea: OPTIONAL<Location>;
    let dNAIS: OPTIONAL<DNAIs>;
    const callbacks: $.DecodingMap = {
        "eESID": (_el: _Element): void => { eESID = $._decode_implicit<EESID>(() => _decode_EESID)(_el); },
        "eESEndpoint": (_el: _Element): void => { eESEndpoint = $._decode_implicit<EESEndpoint>(() => _decode_EESEndpoint)(_el); },
        "eASIDs": (_el: _Element): void => { eASIDs = $._decode_implicit<EASIDs>(() => _decode_EASIDs)(_el); },
        "serviceArea": (_el: _Element): void => { serviceArea = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "dNAIS": (_el: _Element): void => { dNAIS = $._decode_implicit<DNAIs>(() => _decode_DNAIs)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESInfo,
        _extension_additions_list_spec_for_EESInfo,
        _root_component_type_list_2_spec_for_EESInfo,
        undefined,
    );
    return new EESInfo(
        eESID,
        eESEndpoint,
        eASIDs,
        serviceArea,
        dNAIS
    );
}; }
    return _cached_decoder_for_EESInfo(el);
}

let _cached_encoder_for_EESInfo: $.ASN1Encoder<EESInfo> | null = null;

/**
 * @summary Encodes a(n) EESInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EESInfo (value: EESInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESInfo) { _cached_encoder_for_EESInfo = function (value: EESInfo, elGetter: $.ASN1Encoder<EESInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EESID, $.BER)(value.eESID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EESEndpoint, $.BER)(value.eESEndpoint, $.BER),
            /* IF_ABSENT  */ ((value.eASIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EASIDs, $.BER)(value.eASIDs, $.BER)),
            /* IF_ABSENT  */ ((value.serviceArea === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.serviceArea, $.BER)),
            /* IF_ABSENT  */ ((value.dNAIS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_DNAIs, $.BER)(value.dNAIS, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESInfo(value, elGetter);
}


/* eslint-enable */
