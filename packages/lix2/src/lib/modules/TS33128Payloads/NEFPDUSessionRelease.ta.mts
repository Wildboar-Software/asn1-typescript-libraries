/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { NEFReleaseCause, _decode_NEFReleaseCause, _encode_NEFReleaseCause, _enum_for_NEFReleaseCause } from "../TS33128Payloads/NEFReleaseCause.ta.mjs";
// export { NEFReleaseCause, _enum_for_NEFReleaseCause, NEFReleaseCause_sMFRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, sMFRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_dNRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, dNRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_uDMRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, uDMRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_cHFRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, cHFRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_localConfigurationPolicy /* IMPORTED_LONG_ENUMERATION_ITEM */, localConfigurationPolicy /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFReleaseCause_unknownCause /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownCause /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NEFReleaseCause, _encode_NEFReleaseCause } from "../TS33128Payloads/NEFReleaseCause.ta.mjs";


/**
 * @summary NEFPDUSessionRelease
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFPDUSessionRelease ::= SEQUENCE
 * {
 *     sUPI                   [1] SUPI,
 *     gPSI                   [2] GPSI,
 *     pDUSessionID           [3] PDUSessionID,
 *     timeOfFirstPacket      [4] Timestamp OPTIONAL,
 *     timeOfLastPacket       [5] Timestamp OPTIONAL,
 *     uplinkVolume           [6] INTEGER OPTIONAL,
 *     downlinkVolume         [7] INTEGER OPTIONAL,
 *     releaseCause           [8] NEFReleaseCause
 * }
 * ```
 * 
 * @class
 */
export
class NEFPDUSessionRelease {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `timeOfFirstPacket`.
         * @public
         * @readonly
         */
        readonly timeOfFirstPacket: OPTIONAL<Timestamp>,
        /**
         * @summary `timeOfLastPacket`.
         * @public
         * @readonly
         */
        readonly timeOfLastPacket: OPTIONAL<Timestamp>,
        /**
         * @summary `uplinkVolume`.
         * @public
         * @readonly
         */
        readonly uplinkVolume: OPTIONAL<INTEGER>,
        /**
         * @summary `downlinkVolume`.
         * @public
         * @readonly
         */
        readonly downlinkVolume: OPTIONAL<INTEGER>,
        /**
         * @summary `releaseCause`.
         * @public
         * @readonly
         */
        readonly releaseCause: NEFReleaseCause
    ) {}

    /**
     * @summary Restructures an object into a NEFPDUSessionRelease
     * @description
     * 
     * This takes an `object` and converts it to a `NEFPDUSessionRelease`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFPDUSessionRelease`.
     * @returns {NEFPDUSessionRelease}
     */
    public static _from_object (_o: { [_K in keyof (NEFPDUSessionRelease)]: (NEFPDUSessionRelease)[_K] }): NEFPDUSessionRelease {
        return new NEFPDUSessionRelease(_o.sUPI, _o.gPSI, _o.pDUSessionID, _o.timeOfFirstPacket, _o.timeOfLastPacket, _o.uplinkVolume, _o.downlinkVolume, _o.releaseCause);
    }

        /**
         * @summary The enum used as the type of the component `releaseCause`
         * @public
         * @static
         */

    public static _enum_for_releaseCause = _enum_for_NEFReleaseCause;
}

/**
 * @summary The Leading Root Component Types of NEFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFPDUSessionRelease: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeOfFirstPacket", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeOfLastPacket", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("uplinkVolume", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("downlinkVolume", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("releaseCause", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of NEFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFPDUSessionRelease: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFPDUSessionRelease
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFPDUSessionRelease: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFPDUSessionRelease: $.ASN1Decoder<NEFPDUSessionRelease> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFPDUSessionRelease
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFPDUSessionRelease (el: _Element): NEFPDUSessionRelease {
    if (!_cached_decoder_for_NEFPDUSessionRelease) { _cached_decoder_for_NEFPDUSessionRelease = function (el: _Element): NEFPDUSessionRelease {
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let pDUSessionID!: PDUSessionID;
    let timeOfFirstPacket: OPTIONAL<Timestamp>;
    let timeOfLastPacket: OPTIONAL<Timestamp>;
    let uplinkVolume: OPTIONAL<INTEGER>;
    let downlinkVolume: OPTIONAL<INTEGER>;
    let releaseCause!: NEFReleaseCause;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "timeOfFirstPacket": (_el: _Element): void => { timeOfFirstPacket = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "timeOfLastPacket": (_el: _Element): void => { timeOfLastPacket = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "uplinkVolume": (_el: _Element): void => { uplinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "downlinkVolume": (_el: _Element): void => { downlinkVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<NEFReleaseCause>(() => _decode_NEFReleaseCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEFPDUSessionRelease,
        _extension_additions_list_spec_for_NEFPDUSessionRelease,
        _root_component_type_list_2_spec_for_NEFPDUSessionRelease,
        undefined,
    );
    return new NEFPDUSessionRelease(
        sUPI,
        gPSI,
        pDUSessionID,
        timeOfFirstPacket,
        timeOfLastPacket,
        uplinkVolume,
        downlinkVolume,
        releaseCause
    );
}; }
    return _cached_decoder_for_NEFPDUSessionRelease(el);
}

let _cached_encoder_for_NEFPDUSessionRelease: $.ASN1Encoder<NEFPDUSessionRelease> | null = null;

/**
 * @summary Encodes a(n) NEFPDUSessionRelease into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFPDUSessionRelease, encoded as an ASN.1 Element.
 */
export
function _encode_NEFPDUSessionRelease (value: NEFPDUSessionRelease, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFPDUSessionRelease) { _cached_encoder_for_NEFPDUSessionRelease = function (value: NEFPDUSessionRelease, elGetter: $.ASN1Encoder<NEFPDUSessionRelease>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* IF_ABSENT  */ ((value.timeOfFirstPacket === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Timestamp, $.BER)(value.timeOfFirstPacket, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastPacket === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Timestamp, $.BER)(value.timeOfLastPacket, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.uplinkVolume, $.BER)),
            /* IF_ABSENT  */ ((value.downlinkVolume === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.downlinkVolume, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_NEFReleaseCause, $.BER)(value.releaseCause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFPDUSessionRelease(value, elGetter);
}


/* eslint-enable */
