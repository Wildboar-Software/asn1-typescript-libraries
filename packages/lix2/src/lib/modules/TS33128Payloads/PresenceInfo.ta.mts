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
import { PresenceState, _enum_for_PresenceState, PresenceState_inArea /* IMPORTED_LONG_ENUMERATION_ITEM */, inArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_outOfArea /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, inactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceState, _encode_PresenceState } from "../TS33128Payloads/PresenceState.ta.mjs";
// export { PresenceState, _enum_for_PresenceState, PresenceState_inArea /* IMPORTED_LONG_ENUMERATION_ITEM */, inArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_outOfArea /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, PresenceState_inactive /* IMPORTED_LONG_ENUMERATION_ITEM */, inactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PresenceState, _encode_PresenceState } from "../TS33128Payloads/PresenceState.ta.mjs";
import { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
// export { TAI, _decode_TAI, _encode_TAI } from "../TS33128Payloads/TAI.ta.mjs";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";


/**
 * @summary PresenceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresenceInfo ::= SEQUENCE
 * {
 *     presenceState               [1] PresenceState OPTIONAL,
 *     trackingAreaList            [2] SET OF TAI OPTIONAL,
 *     eCGIList                    [3] SET OF ECGI OPTIONAL,
 *     nCGIList                    [4] SET OF NCGI OPTIONAL,
 *     globalRANNodeIDList         [5] SET OF GlobalRANNodeID OPTIONAL,
 *     globalENbIDList             [6] SET OF GlobalRANNodeID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PresenceInfo {
    constructor (
        /**
         * @summary `presenceState`.
         * @public
         * @readonly
         */
        readonly presenceState: OPTIONAL<PresenceState>,
        /**
         * @summary `trackingAreaList`.
         * @public
         * @readonly
         */
        readonly trackingAreaList: OPTIONAL<TAI[]>,
        /**
         * @summary `eCGIList`.
         * @public
         * @readonly
         */
        readonly eCGIList: OPTIONAL<ECGI[]>,
        /**
         * @summary `nCGIList`.
         * @public
         * @readonly
         */
        readonly nCGIList: OPTIONAL<NCGI[]>,
        /**
         * @summary `globalRANNodeIDList`.
         * @public
         * @readonly
         */
        readonly globalRANNodeIDList: OPTIONAL<GlobalRANNodeID[]>,
        /**
         * @summary `globalENbIDList`.
         * @public
         * @readonly
         */
        readonly globalENbIDList: OPTIONAL<GlobalRANNodeID[]>
    ) {}

    /**
     * @summary Restructures an object into a PresenceInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PresenceInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresenceInfo`.
     * @returns {PresenceInfo}
     */
    public static _from_object (_o: { [_K in keyof (PresenceInfo)]: (PresenceInfo)[_K] }): PresenceInfo {
        return new PresenceInfo(_o.presenceState, _o.trackingAreaList, _o.eCGIList, _o.nCGIList, _o.globalRANNodeIDList, _o.globalENbIDList);
    }

        /**
         * @summary The enum used as the type of the component `presenceState`
         * @public
         * @static
         */

    public static _enum_for_presenceState = _enum_for_PresenceState;
}

/**
 * @summary The Leading Root Component Types of PresenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresenceInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceState", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("trackingAreaList", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eCGIList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nCGIList", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("globalRANNodeIDList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("globalENbIDList", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PresenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresenceInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresenceInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresenceInfo: $.ASN1Decoder<PresenceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresenceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresenceInfo (el: _Element): PresenceInfo {
    if (!_cached_decoder_for_PresenceInfo) { _cached_decoder_for_PresenceInfo = function (el: _Element): PresenceInfo {
    let presenceState: OPTIONAL<PresenceState>;
    let trackingAreaList: OPTIONAL<TAI[]>;
    let eCGIList: OPTIONAL<ECGI[]>;
    let nCGIList: OPTIONAL<NCGI[]>;
    let globalRANNodeIDList: OPTIONAL<GlobalRANNodeID[]>;
    let globalENbIDList: OPTIONAL<GlobalRANNodeID[]>;
    const callbacks: $.DecodingMap = {
        "presenceState": (_el: _Element): void => { presenceState = $._decode_implicit<PresenceState>(() => _decode_PresenceState)(_el); },
        "trackingAreaList": (_el: _Element): void => { trackingAreaList = $._decode_implicit<TAI[]>(() => $._decodeSetOf<TAI>(() => _decode_TAI))(_el); },
        "eCGIList": (_el: _Element): void => { eCGIList = $._decode_implicit<ECGI[]>(() => $._decodeSetOf<ECGI>(() => _decode_ECGI))(_el); },
        "nCGIList": (_el: _Element): void => { nCGIList = $._decode_implicit<NCGI[]>(() => $._decodeSetOf<NCGI>(() => _decode_NCGI))(_el); },
        "globalRANNodeIDList": (_el: _Element): void => { globalRANNodeIDList = $._decode_implicit<GlobalRANNodeID[]>(() => $._decodeSetOf<GlobalRANNodeID>(() => _decode_GlobalRANNodeID))(_el); },
        "globalENbIDList": (_el: _Element): void => { globalENbIDList = $._decode_implicit<GlobalRANNodeID[]>(() => $._decodeSetOf<GlobalRANNodeID>(() => _decode_GlobalRANNodeID))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresenceInfo,
        _extension_additions_list_spec_for_PresenceInfo,
        _root_component_type_list_2_spec_for_PresenceInfo,
        undefined,
    );
    return new PresenceInfo(
        presenceState,
        trackingAreaList,
        eCGIList,
        nCGIList,
        globalRANNodeIDList,
        globalENbIDList
    );
}; }
    return _cached_decoder_for_PresenceInfo(el);
}

let _cached_encoder_for_PresenceInfo: $.ASN1Encoder<PresenceInfo> | null = null;

/**
 * @summary Encodes a(n) PresenceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresenceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PresenceInfo (value: PresenceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresenceInfo) { _cached_encoder_for_PresenceInfo = function (value: PresenceInfo, elGetter: $.ASN1Encoder<PresenceInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.presenceState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PresenceState, $.BER)(value.presenceState, $.BER)),
            /* IF_ABSENT  */ ((value.trackingAreaList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<TAI>(() => _encode_TAI, $.BER), $.BER)(value.trackingAreaList, $.BER)),
            /* IF_ABSENT  */ ((value.eCGIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<ECGI>(() => _encode_ECGI, $.BER), $.BER)(value.eCGIList, $.BER)),
            /* IF_ABSENT  */ ((value.nCGIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSetOf<NCGI>(() => _encode_NCGI, $.BER), $.BER)(value.nCGIList, $.BER)),
            /* IF_ABSENT  */ ((value.globalRANNodeIDList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<GlobalRANNodeID>(() => _encode_GlobalRANNodeID, $.BER), $.BER)(value.globalRANNodeIDList, $.BER)),
            /* IF_ABSENT  */ ((value.globalENbIDList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSetOf<GlobalRANNodeID>(() => _encode_GlobalRANNodeID, $.BER), $.BER)(value.globalENbIDList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PresenceInfo(value, elGetter);
}


/* eslint-enable */
