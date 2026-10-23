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
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
// export { SMSTPDUData, _decode_SMSTPDUData, _encode_SMSTPDUData } from "../TS33128Payloads/SMSTPDUData.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary SCEFMSISDNLessMOSMS
 * @description
 * 
 * The IRI-POI in the SCEF shall generate an xIRI containing a
 * SCEFMSISDNLessMOSMS record when the IRI-POI present in the SCEF detects that
 * a target UE has sent a MSISDN-less MO SMS to an SCS/AS.
 *
 * Accordingly, the IRI-POI in the SCEF generates the xIRI when any of the
 * following events is detected:
 *
 * - SCEF receives a SGd MO-Forward-Short-Message-Request (OFR) from an SM-SC
 *   with IMSI matching the target identifier (see TS 29.338 [59] clause 6.2.1).
 *
 * - SCEF sends a MsisdnLessMoSmsNotification to the SCS/AS with the External
 *   Identifier of the UE sending the MSISDN-less SMS (see TS 29.122 [63] clause
 *   5.15).
 *
 * Table 7.8.4.2-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.8.4.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFMSISDNLessMOSMS ::= SEQUENCE
 * {
 *     iMSI                      [1] IMSI OPTIONAL,
 *     mSISDN                    [2] MSISDN OPTIONAL,
 *     externalIdentifie         [3] NAI OPTIONAL,
 *     terminatingSMSParty       [4] SCSASID,
 *     sMS                       [5] SMSTPDUData OPTIONAL,
 *     sourcePort                [6] PortNumber OPTIONAL,
 *     destinationPort           [7] PortNumber OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SCEFMSISDNLessMOSMS {
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the target UE.
     *
     * 3GPP TS 33.128, clause 7.8.4.1.2.
     *
     * @public
     * @readonly
     */
    readonly iMSI: OPTIONAL<IMSI>;
    /**
     * @summary `mSISDN`.
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary `externalIdentifie`.
     * @public
     * @readonly
     */
    readonly externalIdentifie: OPTIONAL<NAI>;
    /**
     * @summary `terminatingSMSParty`.
     * @description
     *
     * Identity of the SCS/AS receiving the SMS.
     *
     * 3GPP TS 33.128, clause 7.8.4.1.2.
     *
     * @public
     * @readonly
     */
    readonly terminatingSMSParty: SCSASID;
    /**
     * @summary `sMS`.
     * @description
     *
     * SMS TPDU.
     *
     * 3GPP TS 33.128, clause 7.8.4.1.2.
     *
     * @public
     * @readonly
     */
    readonly sMS: OPTIONAL<SMSTPDUData>;
    /**
     * @summary `sourcePort`.
     * @description
     *
     * port identifying the application of the target UE sending the MSISN-less
     * MO SMS.
     *
     * 3GPP TS 33.128, clause 7.8.4.1.2.
     *
     * @public
     * @readonly
     */
    readonly sourcePort: OPTIONAL<PortNumber>;
    /**
     * @summary `destinationPort`.
     * @description
     *
     * port identifying the application of the SCS/AS which is the recipient of
     * the MSISN-less MO SMS.
     *
     * 3GPP TS 33.128, clause 7.8.4.1.2.
     *
     * @public
     * @readonly
     */
    readonly destinationPort: OPTIONAL<PortNumber>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI: OPTIONAL<IMSI>,
        mSISDN: OPTIONAL<MSISDN>,
        externalIdentifie: OPTIONAL<NAI>,
        terminatingSMSParty: SCSASID,
        sMS?: OPTIONAL<SMSTPDUData>,
        sourcePort?: OPTIONAL<PortNumber>,
        destinationPort?: OPTIONAL<PortNumber>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.mSISDN = mSISDN;
        this.externalIdentifie = externalIdentifie;
        this.terminatingSMSParty = terminatingSMSParty;
        this.sMS = sMS;
        this.sourcePort = sourcePort;
        this.destinationPort = destinationPort;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SCEFMSISDNLessMOSMS
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFMSISDNLessMOSMS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFMSISDNLessMOSMS`.
     * @returns {SCEFMSISDNLessMOSMS}
     */
    public static _from_object (_o: { [_K in keyof (SCEFMSISDNLessMOSMS)]: (SCEFMSISDNLessMOSMS)[_K] }): SCEFMSISDNLessMOSMS {
        return new SCEFMSISDNLessMOSMS(_o.iMSI, _o.mSISDN, _o.externalIdentifie, _o.terminatingSMSParty, _o.sMS, _o.sourcePort, _o.destinationPort, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SCEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifie", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("terminatingSMSParty", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMS", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sourcePort", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("destinationPort", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of SCEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFMSISDNLessMOSMS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFMSISDNLessMOSMS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFMSISDNLessMOSMS: $.ASN1Decoder<SCEFMSISDNLessMOSMS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFMSISDNLessMOSMS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFMSISDNLessMOSMS (el: _Element): SCEFMSISDNLessMOSMS {
    if (!_cached_decoder_for_SCEFMSISDNLessMOSMS) { _cached_decoder_for_SCEFMSISDNLessMOSMS = function (el: _Element): SCEFMSISDNLessMOSMS {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifie: OPTIONAL<NAI>;
    let terminatingSMSParty!: SCSASID;
    let sMS: OPTIONAL<SMSTPDUData>;
    let sourcePort: OPTIONAL<PortNumber>;
    let destinationPort: OPTIONAL<PortNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifie": (_el: _Element): void => { externalIdentifie = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "terminatingSMSParty": (_el: _Element): void => { terminatingSMSParty = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); },
        "sMS": (_el: _Element): void => { sMS = $._decode_explicit<SMSTPDUData>(() => _decode_SMSTPDUData)(_el); },
        "sourcePort": (_el: _Element): void => { sourcePort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "destinationPort": (_el: _Element): void => { destinationPort = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFMSISDNLessMOSMS,
        _extension_additions_list_spec_for_SCEFMSISDNLessMOSMS,
        _root_component_type_list_2_spec_for_SCEFMSISDNLessMOSMS,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SCEFMSISDNLessMOSMS(
        iMSI,
        mSISDN,
        externalIdentifie,
        terminatingSMSParty,
        sMS,
        sourcePort,
        destinationPort,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SCEFMSISDNLessMOSMS(el);
}

let _cached_encoder_for_SCEFMSISDNLessMOSMS: $.ASN1Encoder<SCEFMSISDNLessMOSMS> | null = null;

/**
 * @summary Encodes a(n) SCEFMSISDNLessMOSMS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFMSISDNLessMOSMS, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFMSISDNLessMOSMS (value: SCEFMSISDNLessMOSMS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFMSISDNLessMOSMS) { _cached_encoder_for_SCEFMSISDNLessMOSMS = function (value: SCEFMSISDNLessMOSMS, elGetter: $.ASN1Encoder<SCEFMSISDNLessMOSMS>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.iMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    }
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    if (value.externalIdentifie !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER)(value.externalIdentifie, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SCSASID, $.BER)(value.terminatingSMSParty, $.BER);
    if (value.sMS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_SMSTPDUData, $.BER)(value.sMS, $.BER);
    }
    if (value.sourcePort !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_PortNumber, $.BER)(value.sourcePort, $.BER);
    }
    if (value.destinationPort !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_PortNumber, $.BER)(value.destinationPort, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SCEFMSISDNLessMOSMS(value, elGetter);
}


/* eslint-enable */
