/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { SCEFID, _decode_SCEFID, _encode_SCEFID } from "../TS33128Payloads/SCEFID.ta.mjs";
// export { SCEFID, _decode_SCEFID, _encode_SCEFID } from "../TS33128Payloads/SCEFID.ta.mjs";
import { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../TS33128Payloads/APN.ta.mjs";
import { RDSSupport, _decode_RDSSupport, _encode_RDSSupport } from "../TS33128Payloads/RDSSupport.ta.mjs";
// export { RDSSupport, _decode_RDSSupport, _encode_RDSSupport } from "../TS33128Payloads/RDSSupport.ta.mjs";
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";


/**
 * @summary SCEFStartOfInterceptionWithEstablishedPDNConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFStartOfInterceptionWithEstablishedPDNConnection ::= SEQUENCE
 * {
 *     iMSI                  [1] IMSI OPTIONAL,
 *     mSISDN                [2] MSISDN OPTIONAL,
 *     externalIdentifier    [3] NAI OPTIONAL,
 *     iMEI                  [4] IMEI OPTIONAL,
 *     ePSBearerID           [5] EPSBearerID,
 *     sCEFID                [6] SCEFID,
 *     aPN                   [7] APN,
 *     rDSSupport            [8] RDSSupport,
 *     sCSASID               [9] SCSASID
 * }
 * ```
 * 
 * @class
 */
export
class SCEFStartOfInterceptionWithEstablishedPDNConnection {
    constructor (
        /**
         * @summary `iMSI`.
         * @public
         * @readonly
         */
        readonly iMSI: OPTIONAL<IMSI>,
        /**
         * @summary `mSISDN`.
         * @public
         * @readonly
         */
        readonly mSISDN: OPTIONAL<MSISDN>,
        /**
         * @summary `externalIdentifier`.
         * @public
         * @readonly
         */
        readonly externalIdentifier: OPTIONAL<NAI>,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `sCEFID`.
         * @public
         * @readonly
         */
        readonly sCEFID: SCEFID,
        /**
         * @summary `aPN`.
         * @public
         * @readonly
         */
        readonly aPN: APN,
        /**
         * @summary `rDSSupport`.
         * @public
         * @readonly
         */
        readonly rDSSupport: RDSSupport,
        /**
         * @summary `sCSASID`.
         * @public
         * @readonly
         */
        readonly sCSASID: SCSASID
    ) {}

    /**
     * @summary Restructures an object into a SCEFStartOfInterceptionWithEstablishedPDNConnection
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFStartOfInterceptionWithEstablishedPDNConnection`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFStartOfInterceptionWithEstablishedPDNConnection`.
     * @returns {SCEFStartOfInterceptionWithEstablishedPDNConnection}
     */
    public static _from_object (_o: { [_K in keyof (SCEFStartOfInterceptionWithEstablishedPDNConnection)]: (SCEFStartOfInterceptionWithEstablishedPDNConnection)[_K] }): SCEFStartOfInterceptionWithEstablishedPDNConnection {
        return new SCEFStartOfInterceptionWithEstablishedPDNConnection(_o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.iMEI, _o.ePSBearerID, _o.sCEFID, _o.aPN, _o.rDSSupport, _o.sCSASID);
    }


}

/**
 * @summary The Leading Root Component Types of SCEFStartOfInterceptionWithEstablishedPDNConnection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFStartOfInterceptionWithEstablishedPDNConnection: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sCEFID", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aPN", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("rDSSupport", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sCSASID", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SCEFStartOfInterceptionWithEstablishedPDNConnection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFStartOfInterceptionWithEstablishedPDNConnection: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFStartOfInterceptionWithEstablishedPDNConnection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFStartOfInterceptionWithEstablishedPDNConnection: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFStartOfInterceptionWithEstablishedPDNConnection: $.ASN1Decoder<SCEFStartOfInterceptionWithEstablishedPDNConnection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFStartOfInterceptionWithEstablishedPDNConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFStartOfInterceptionWithEstablishedPDNConnection (el: _Element): SCEFStartOfInterceptionWithEstablishedPDNConnection {
    if (!_cached_decoder_for_SCEFStartOfInterceptionWithEstablishedPDNConnection) { _cached_decoder_for_SCEFStartOfInterceptionWithEstablishedPDNConnection = function (el: _Element): SCEFStartOfInterceptionWithEstablishedPDNConnection {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let iMEI: OPTIONAL<IMEI>;
    let ePSBearerID!: EPSBearerID;
    let sCEFID!: SCEFID;
    let aPN!: APN;
    let rDSSupport!: RDSSupport;
    let sCSASID!: SCSASID;
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "ePSBearerID": (_el: _Element): void => { ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "sCEFID": (_el: _Element): void => { sCEFID = $._decode_implicit<SCEFID>(() => _decode_SCEFID)(_el); },
        "aPN": (_el: _Element): void => { aPN = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "rDSSupport": (_el: _Element): void => { rDSSupport = $._decode_implicit<RDSSupport>(() => _decode_RDSSupport)(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFStartOfInterceptionWithEstablishedPDNConnection,
        _extension_additions_list_spec_for_SCEFStartOfInterceptionWithEstablishedPDNConnection,
        _root_component_type_list_2_spec_for_SCEFStartOfInterceptionWithEstablishedPDNConnection,
        undefined,
    );
    return new SCEFStartOfInterceptionWithEstablishedPDNConnection(
        iMSI,
        mSISDN,
        externalIdentifier,
        iMEI,
        ePSBearerID,
        sCEFID,
        aPN,
        rDSSupport,
        sCSASID
    );
}; }
    return _cached_decoder_for_SCEFStartOfInterceptionWithEstablishedPDNConnection(el);
}

let _cached_encoder_for_SCEFStartOfInterceptionWithEstablishedPDNConnection: $.ASN1Encoder<SCEFStartOfInterceptionWithEstablishedPDNConnection> | null = null;

/**
 * @summary Encodes a(n) SCEFStartOfInterceptionWithEstablishedPDNConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFStartOfInterceptionWithEstablishedPDNConnection, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFStartOfInterceptionWithEstablishedPDNConnection (value: SCEFStartOfInterceptionWithEstablishedPDNConnection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFStartOfInterceptionWithEstablishedPDNConnection) { _cached_encoder_for_SCEFStartOfInterceptionWithEstablishedPDNConnection = function (value: SCEFStartOfInterceptionWithEstablishedPDNConnection, elGetter: $.ASN1Encoder<SCEFStartOfInterceptionWithEstablishedPDNConnection>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER)),
            /* IF_ABSENT  */ ((value.mSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.externalIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_SCEFID, $.BER)(value.sCEFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_APN, $.BER)(value.aPN, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_RDSSupport, $.BER)(value.rDSSupport, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SCEFStartOfInterceptionWithEstablishedPDNConnection(value, elGetter);
}


/* eslint-enable */
