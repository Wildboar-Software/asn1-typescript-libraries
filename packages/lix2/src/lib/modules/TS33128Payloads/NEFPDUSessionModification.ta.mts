/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { Initiator, _decode_Initiator, _encode_Initiator, _enum_for_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
// export { Initiator, _enum_for_Initiator, Initiator_uE /* IMPORTED_LONG_ENUMERATION_ITEM */, uE /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_network /* IMPORTED_LONG_ENUMERATION_ITEM */, network /* IMPORTED_SHORT_ENUMERATION_ITEM */, Initiator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Initiator, _encode_Initiator } from "../TS33128Payloads/Initiator.ta.mjs";
import { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
// export { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
import { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
// export { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { RDSAction, _decode_RDSAction, _encode_RDSAction, _enum_for_RDSAction } from "../TS33128Payloads/RDSAction.ta.mjs";
// export { RDSAction, _enum_for_RDSAction, RDSAction_reservePort /* IMPORTED_LONG_ENUMERATION_ITEM */, reservePort /* IMPORTED_SHORT_ENUMERATION_ITEM */, RDSAction_releasePort /* IMPORTED_LONG_ENUMERATION_ITEM */, releasePort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RDSAction, _encode_RDSAction } from "../TS33128Payloads/RDSAction.ta.mjs";
import { SerializationFormat, _decode_SerializationFormat, _encode_SerializationFormat, _enum_for_SerializationFormat } from "../TS33128Payloads/SerializationFormat.ta.mjs";
// export { SerializationFormat, _enum_for_SerializationFormat, SerializationFormat_xml /* IMPORTED_LONG_ENUMERATION_ITEM */, xml /* IMPORTED_SHORT_ENUMERATION_ITEM */, SerializationFormat_json /* IMPORTED_LONG_ENUMERATION_ITEM */, json /* IMPORTED_SHORT_ENUMERATION_ITEM */, SerializationFormat_cbor /* IMPORTED_LONG_ENUMERATION_ITEM */, cbor /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SerializationFormat, _encode_SerializationFormat } from "../TS33128Payloads/SerializationFormat.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";


/**
 * @summary NEFPDUSessionModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFPDUSessionModification ::= SEQUENCE
 * {
 *     sUPI                         [1] SUPI,
 *     gPSI                         [2] GPSI,
 *     sNSSAI                       [3] SNSSAI,
 *     initiator                    [4] Initiator,
 *     rDSSourcePortNumber          [5] RDSPortNumber OPTIONAL,
 *     rDSDestinationPortNumber     [6] RDSPortNumber OPTIONAL,
 *     applicationID                [7] ApplicationID OPTIONAL,
 *     aFID                         [8] AFID OPTIONAL,
 *     rDSAction                    [9] RDSAction OPTIONAL,
 *     serializationFormat          [10] SerializationFormat OPTIONAL,
 *     pDUSessionID                 [11] PDUSessionID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NEFPDUSessionModification {
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
         * @summary `sNSSAI`.
         * @public
         * @readonly
         */
        readonly sNSSAI: SNSSAI,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: Initiator,
        /**
         * @summary `rDSSourcePortNumber`.
         * @public
         * @readonly
         */
        readonly rDSSourcePortNumber: OPTIONAL<RDSPortNumber>,
        /**
         * @summary `rDSDestinationPortNumber`.
         * @public
         * @readonly
         */
        readonly rDSDestinationPortNumber: OPTIONAL<RDSPortNumber>,
        /**
         * @summary `applicationID`.
         * @public
         * @readonly
         */
        readonly applicationID: OPTIONAL<ApplicationID>,
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: OPTIONAL<AFID>,
        /**
         * @summary `rDSAction`.
         * @public
         * @readonly
         */
        readonly rDSAction: OPTIONAL<RDSAction>,
        /**
         * @summary `serializationFormat`.
         * @public
         * @readonly
         */
        readonly serializationFormat: OPTIONAL<SerializationFormat>,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: OPTIONAL<PDUSessionID>
    ) {}

    /**
     * @summary Restructures an object into a NEFPDUSessionModification
     * @description
     * 
     * This takes an `object` and converts it to a `NEFPDUSessionModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFPDUSessionModification`.
     * @returns {NEFPDUSessionModification}
     */
    public static _from_object (_o: { [_K in keyof (NEFPDUSessionModification)]: (NEFPDUSessionModification)[_K] }): NEFPDUSessionModification {
        return new NEFPDUSessionModification(_o.sUPI, _o.gPSI, _o.sNSSAI, _o.initiator, _o.rDSSourcePortNumber, _o.rDSDestinationPortNumber, _o.applicationID, _o.aFID, _o.rDSAction, _o.serializationFormat, _o.pDUSessionID);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_Initiator;        /**
         * @summary The enum used as the type of the component `rDSAction`
         * @public
         * @static
         */

    public static _enum_for_rDSAction = _enum_for_RDSAction;        /**
         * @summary The enum used as the type of the component `serializationFormat`
         * @public
         * @static
         */

    public static _enum_for_serializationFormat = _enum_for_SerializationFormat;
}

/**
 * @summary The Leading Root Component Types of NEFPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFPDUSessionModification: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sNSSAI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initiator", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("rDSSourcePortNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rDSDestinationPortNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("applicationID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("aFID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("rDSAction", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serializationFormat", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("pDUSessionID", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of NEFPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFPDUSessionModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFPDUSessionModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFPDUSessionModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFPDUSessionModification: $.ASN1Decoder<NEFPDUSessionModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFPDUSessionModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFPDUSessionModification (el: _Element): NEFPDUSessionModification {
    if (!_cached_decoder_for_NEFPDUSessionModification) { _cached_decoder_for_NEFPDUSessionModification = function (el: _Element): NEFPDUSessionModification {
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let sNSSAI!: SNSSAI;
    let initiator!: Initiator;
    let rDSSourcePortNumber: OPTIONAL<RDSPortNumber>;
    let rDSDestinationPortNumber: OPTIONAL<RDSPortNumber>;
    let applicationID: OPTIONAL<ApplicationID>;
    let aFID: OPTIONAL<AFID>;
    let rDSAction: OPTIONAL<RDSAction>;
    let serializationFormat: OPTIONAL<SerializationFormat>;
    let pDUSessionID: OPTIONAL<PDUSessionID>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<Initiator>(() => _decode_Initiator)(_el); },
        "rDSSourcePortNumber": (_el: _Element): void => { rDSSourcePortNumber = $._decode_implicit<RDSPortNumber>(() => _decode_RDSPortNumber)(_el); },
        "rDSDestinationPortNumber": (_el: _Element): void => { rDSDestinationPortNumber = $._decode_implicit<RDSPortNumber>(() => _decode_RDSPortNumber)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<ApplicationID>(() => _decode_ApplicationID)(_el); },
        "aFID": (_el: _Element): void => { aFID = $._decode_implicit<AFID>(() => _decode_AFID)(_el); },
        "rDSAction": (_el: _Element): void => { rDSAction = $._decode_implicit<RDSAction>(() => _decode_RDSAction)(_el); },
        "serializationFormat": (_el: _Element): void => { serializationFormat = $._decode_implicit<SerializationFormat>(() => _decode_SerializationFormat)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEFPDUSessionModification,
        _extension_additions_list_spec_for_NEFPDUSessionModification,
        _root_component_type_list_2_spec_for_NEFPDUSessionModification,
        undefined,
    );
    return new NEFPDUSessionModification(
        sUPI,
        gPSI,
        sNSSAI,
        initiator,
        rDSSourcePortNumber,
        rDSDestinationPortNumber,
        applicationID,
        aFID,
        rDSAction,
        serializationFormat,
        pDUSessionID
    );
}; }
    return _cached_decoder_for_NEFPDUSessionModification(el);
}

let _cached_encoder_for_NEFPDUSessionModification: $.ASN1Encoder<NEFPDUSessionModification> | null = null;

/**
 * @summary Encodes a(n) NEFPDUSessionModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFPDUSessionModification, encoded as an ASN.1 Element.
 */
export
function _encode_NEFPDUSessionModification (value: NEFPDUSessionModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFPDUSessionModification) { _cached_encoder_for_NEFPDUSessionModification = function (value: NEFPDUSessionModification, elGetter: $.ASN1Encoder<NEFPDUSessionModification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Initiator, $.BER)(value.initiator, $.BER),
            /* IF_ABSENT  */ ((value.rDSSourcePortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RDSPortNumber, $.BER)(value.rDSSourcePortNumber, $.BER)),
            /* IF_ABSENT  */ ((value.rDSDestinationPortNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RDSPortNumber, $.BER)(value.rDSDestinationPortNumber, $.BER)),
            /* IF_ABSENT  */ ((value.applicationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ApplicationID, $.BER)(value.applicationID, $.BER)),
            /* IF_ABSENT  */ ((value.aFID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_AFID, $.BER)(value.aFID, $.BER)),
            /* IF_ABSENT  */ ((value.rDSAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_RDSAction, $.BER)(value.rDSAction, $.BER)),
            /* IF_ABSENT  */ ((value.serializationFormat === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_SerializationFormat, $.BER)(value.serializationFormat, $.BER)),
            /* IF_ABSENT  */ ((value.pDUSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFPDUSessionModification(value, elGetter);
}


/* eslint-enable */
