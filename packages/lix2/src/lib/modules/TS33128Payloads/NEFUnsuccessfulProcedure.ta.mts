/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NEFFailureCause, _decode_NEFFailureCause, _encode_NEFFailureCause, _enum_for_NEFFailureCause } from "../TS33128Payloads/NEFFailureCause.ta.mjs";
// export { NEFFailureCause, _enum_for_NEFFailureCause, NEFFailureCause_userUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, userUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFFailureCause_niddConfigurationNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, niddConfigurationNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFFailureCause_contextNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, contextNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFFailureCause_portNotFree /* IMPORTED_LONG_ENUMERATION_ITEM */, portNotFree /* IMPORTED_SHORT_ENUMERATION_ITEM */, NEFFailureCause_portNotAssociatedWithSpecifiedApplication /* IMPORTED_LONG_ENUMERATION_ITEM */, portNotAssociatedWithSpecifiedApplication /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NEFFailureCause, _encode_NEFFailureCause } from "../TS33128Payloads/NEFFailureCause.ta.mjs";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
// export { DNN, _decode_DNN, _encode_DNN } from "../TS33128Payloads/DNN.ta.mjs";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
import { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
// export { RDSPortNumber, _decode_RDSPortNumber, _encode_RDSPortNumber } from "../TS33128Payloads/RDSPortNumber.ta.mjs";
import { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
// export { ApplicationID, _decode_ApplicationID, _encode_ApplicationID } from "../TS33128Payloads/ApplicationID.ta.mjs";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";


/**
 * @summary NEFUnsuccessfulProcedure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFUnsuccessfulProcedure ::= SEQUENCE
 * {
 *     failureCause                 [1] NEFFailureCause,
 *     sUPI                         [2] SUPI,
 *     gPSI                         [3] GPSI OPTIONAL,
 *     pDUSessionID                 [4] PDUSessionID,
 *     dNN                          [5] DNN OPTIONAL,
 *     sNSSAI                       [6] SNSSAI OPTIONAL,
 *     rDSDestinationPortNumber     [7] RDSPortNumber,
 *     applicationID                [8] ApplicationID,
 *     aFID                         [9] AFID
 * }
 * ```
 * 
 * @class
 */
export
class NEFUnsuccessfulProcedure {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: NEFFailureCause,
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
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `dNN`.
         * @public
         * @readonly
         */
        readonly dNN: OPTIONAL<DNN>,
        /**
         * @summary `sNSSAI`.
         * @public
         * @readonly
         */
        readonly sNSSAI: OPTIONAL<SNSSAI>,
        /**
         * @summary `rDSDestinationPortNumber`.
         * @public
         * @readonly
         */
        readonly rDSDestinationPortNumber: RDSPortNumber,
        /**
         * @summary `applicationID`.
         * @public
         * @readonly
         */
        readonly applicationID: ApplicationID,
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID
    ) {}

    /**
     * @summary Restructures an object into a NEFUnsuccessfulProcedure
     * @description
     * 
     * This takes an `object` and converts it to a `NEFUnsuccessfulProcedure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFUnsuccessfulProcedure`.
     * @returns {NEFUnsuccessfulProcedure}
     */
    public static _from_object (_o: { [_K in keyof (NEFUnsuccessfulProcedure)]: (NEFUnsuccessfulProcedure)[_K] }): NEFUnsuccessfulProcedure {
        return new NEFUnsuccessfulProcedure(_o.failureCause, _o.sUPI, _o.gPSI, _o.pDUSessionID, _o.dNN, _o.sNSSAI, _o.rDSDestinationPortNumber, _o.applicationID, _o.aFID);
    }

        /**
         * @summary The enum used as the type of the component `failureCause`
         * @public
         * @static
         */

    public static _enum_for_failureCause = _enum_for_NEFFailureCause;
}

/**
 * @summary The Leading Root Component Types of NEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dNN", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sNSSAI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rDSDestinationPortNumber", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("applicationID", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of NEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFUnsuccessfulProcedure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFUnsuccessfulProcedure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFUnsuccessfulProcedure: $.ASN1Decoder<NEFUnsuccessfulProcedure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFUnsuccessfulProcedure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFUnsuccessfulProcedure (el: _Element): NEFUnsuccessfulProcedure {
    if (!_cached_decoder_for_NEFUnsuccessfulProcedure) { _cached_decoder_for_NEFUnsuccessfulProcedure = function (el: _Element): NEFUnsuccessfulProcedure {
    let failureCause!: NEFFailureCause;
    let sUPI!: SUPI;
    let gPSI: OPTIONAL<GPSI>;
    let pDUSessionID!: PDUSessionID;
    let dNN: OPTIONAL<DNN>;
    let sNSSAI: OPTIONAL<SNSSAI>;
    let rDSDestinationPortNumber!: RDSPortNumber;
    let applicationID!: ApplicationID;
    let aFID!: AFID;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<NEFFailureCause>(() => _decode_NEFFailureCause)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "dNN": (_el: _Element): void => { dNN = $._decode_implicit<DNN>(() => _decode_DNN)(_el); },
        "sNSSAI": (_el: _Element): void => { sNSSAI = $._decode_implicit<SNSSAI>(() => _decode_SNSSAI)(_el); },
        "rDSDestinationPortNumber": (_el: _Element): void => { rDSDestinationPortNumber = $._decode_implicit<RDSPortNumber>(() => _decode_RDSPortNumber)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<ApplicationID>(() => _decode_ApplicationID)(_el); },
        "aFID": (_el: _Element): void => { aFID = $._decode_implicit<AFID>(() => _decode_AFID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEFUnsuccessfulProcedure,
        _extension_additions_list_spec_for_NEFUnsuccessfulProcedure,
        _root_component_type_list_2_spec_for_NEFUnsuccessfulProcedure,
        undefined,
    );
    return new NEFUnsuccessfulProcedure(
        failureCause,
        sUPI,
        gPSI,
        pDUSessionID,
        dNN,
        sNSSAI,
        rDSDestinationPortNumber,
        applicationID,
        aFID
    );
}; }
    return _cached_decoder_for_NEFUnsuccessfulProcedure(el);
}

let _cached_encoder_for_NEFUnsuccessfulProcedure: $.ASN1Encoder<NEFUnsuccessfulProcedure> | null = null;

/**
 * @summary Encodes a(n) NEFUnsuccessfulProcedure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFUnsuccessfulProcedure, encoded as an ASN.1 Element.
 */
export
function _encode_NEFUnsuccessfulProcedure (value: NEFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFUnsuccessfulProcedure) { _cached_encoder_for_NEFUnsuccessfulProcedure = function (value: NEFUnsuccessfulProcedure, elGetter: $.ASN1Encoder<NEFUnsuccessfulProcedure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NEFFailureCause, $.BER)(value.failureCause, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* IF_ABSENT  */ ((value.dNN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_DNN, $.BER)(value.dNN, $.BER)),
            /* IF_ABSENT  */ ((value.sNSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_SNSSAI, $.BER)(value.sNSSAI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_RDSPortNumber, $.BER)(value.rDSDestinationPortNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_ApplicationID, $.BER)(value.applicationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_AFID, $.BER)(value.aFID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFUnsuccessfulProcedure(value, elGetter);
}


/* eslint-enable */
