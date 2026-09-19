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
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
// export { PDUSessionID, _decode_PDUSessionID, _encode_PDUSessionID } from "../TS33128Payloads/PDUSessionID.ta.mjs";
import { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../TS33128Payloads/RemoteUEContext.ta.mjs";
// export { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../TS33128Payloads/RemoteUEContext.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary SMFProSeRemoteUEReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFProSeRemoteUEReport ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     gPSI                        [2] GPSI OPTIONAL,
 *     pEI                         [3] PEI OPTIONAL,
 *     pDUSessionID                [4] PDUSessionID,
 *     remoteUEContextConnected    [5] RemoteUEContext OPTIONAL,
 *     remoteUEContextDisconnected [6] RemoteUEContext OPTIONAL,
 *     location                    [7] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMFProSeRemoteUEReport {
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
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `pDUSessionID`.
         * @public
         * @readonly
         */
        readonly pDUSessionID: PDUSessionID,
        /**
         * @summary `remoteUEContextConnected`.
         * @public
         * @readonly
         */
        readonly remoteUEContextConnected: OPTIONAL<RemoteUEContext>,
        /**
         * @summary `remoteUEContextDisconnected`.
         * @public
         * @readonly
         */
        readonly remoteUEContextDisconnected: OPTIONAL<RemoteUEContext>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>
    ) {}

    /**
     * @summary Restructures an object into a SMFProSeRemoteUEReport
     * @description
     * 
     * This takes an `object` and converts it to a `SMFProSeRemoteUEReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMFProSeRemoteUEReport`.
     * @returns {SMFProSeRemoteUEReport}
     */
    public static _from_object (_o: { [_K in keyof (SMFProSeRemoteUEReport)]: (SMFProSeRemoteUEReport)[_K] }): SMFProSeRemoteUEReport {
        return new SMFProSeRemoteUEReport(_o.sUPI, _o.gPSI, _o.pEI, _o.pDUSessionID, _o.remoteUEContextConnected, _o.remoteUEContextDisconnected, _o.location);
    }


}

/**
 * @summary The Leading Root Component Types of SMFProSeRemoteUEReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMFProSeRemoteUEReport: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pDUSessionID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("remoteUEContextConnected", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("remoteUEContextDisconnected", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of SMFProSeRemoteUEReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMFProSeRemoteUEReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMFProSeRemoteUEReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMFProSeRemoteUEReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMFProSeRemoteUEReport: $.ASN1Decoder<SMFProSeRemoteUEReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFProSeRemoteUEReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFProSeRemoteUEReport (el: _Element): SMFProSeRemoteUEReport {
    if (!_cached_decoder_for_SMFProSeRemoteUEReport) { _cached_decoder_for_SMFProSeRemoteUEReport = function (el: _Element): SMFProSeRemoteUEReport {
    let sUPI!: SUPI;
    let gPSI: OPTIONAL<GPSI>;
    let pEI: OPTIONAL<PEI>;
    let pDUSessionID!: PDUSessionID;
    let remoteUEContextConnected: OPTIONAL<RemoteUEContext>;
    let remoteUEContextDisconnected: OPTIONAL<RemoteUEContext>;
    let location: OPTIONAL<Location>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "pDUSessionID": (_el: _Element): void => { pDUSessionID = $._decode_implicit<PDUSessionID>(() => _decode_PDUSessionID)(_el); },
        "remoteUEContextConnected": (_el: _Element): void => { remoteUEContextConnected = $._decode_implicit<RemoteUEContext>(() => _decode_RemoteUEContext)(_el); },
        "remoteUEContextDisconnected": (_el: _Element): void => { remoteUEContextDisconnected = $._decode_implicit<RemoteUEContext>(() => _decode_RemoteUEContext)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMFProSeRemoteUEReport,
        _extension_additions_list_spec_for_SMFProSeRemoteUEReport,
        _root_component_type_list_2_spec_for_SMFProSeRemoteUEReport,
        undefined,
    );
    return new SMFProSeRemoteUEReport(
        sUPI,
        gPSI,
        pEI,
        pDUSessionID,
        remoteUEContextConnected,
        remoteUEContextDisconnected,
        location
    );
}; }
    return _cached_decoder_for_SMFProSeRemoteUEReport(el);
}

let _cached_encoder_for_SMFProSeRemoteUEReport: $.ASN1Encoder<SMFProSeRemoteUEReport> | null = null;

/**
 * @summary Encodes a(n) SMFProSeRemoteUEReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFProSeRemoteUEReport, encoded as an ASN.1 Element.
 */
export
function _encode_SMFProSeRemoteUEReport (value: SMFProSeRemoteUEReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFProSeRemoteUEReport) { _cached_encoder_for_SMFProSeRemoteUEReport = function (value: SMFProSeRemoteUEReport, elGetter: $.ASN1Encoder<SMFProSeRemoteUEReport>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PDUSessionID, $.BER)(value.pDUSessionID, $.BER),
            /* IF_ABSENT  */ ((value.remoteUEContextConnected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_RemoteUEContext, $.BER)(value.remoteUEContextConnected, $.BER)),
            /* IF_ABSENT  */ ((value.remoteUEContextDisconnected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RemoteUEContext, $.BER)(value.remoteUEContextDisconnected, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMFProSeRemoteUEReport(value, elGetter);
}


/* eslint-enable */
