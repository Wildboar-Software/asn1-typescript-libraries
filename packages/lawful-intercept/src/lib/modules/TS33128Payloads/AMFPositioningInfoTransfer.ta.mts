/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { type PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { type GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFPositioningInfoTransfer
 * @description
 * 
 * The IRI-POI present in the AMF shall generate an xIRI containing an
 * AMFPositioningInfoTransfer when the IRI-POI present in the AMF detects one of
 * the following events:
 *
 * - an NRPPa (see TS 38.455 [86]) message related to a target UE has been
 *   exchanged between the LMF and NG-RAN via the AMF.
 *
 * - a LPP (see TS 37.355 [85]) message related to a target UE has been
 *   exchanged between the LMF and the target UE via the AMF.
 *
 * Accordingly, the IRI-POI in AMF generates the xIRI when any of the following
 * events is detected:
 *
 * - AMF receives an Namf_Communication_N1N2MessageTransfer (see TS 29.518 [22])
 *   from LMF to request the transfer of a NRPPa request to the serving NG-RAN
 *   node for a target UE as part of a UE associated NRPPa positioning activity.
 *   The NRPPa request may be E-CID MEASUREMENT INITIATION REQUEST or OTDOA
 *   INFORMATION REQUEST.
 *
 * - AMF sends a Namf_Communication_N2InfoNotify (see TS 29.518 [22]) to the LMF
 *   to forward the NRPPa response or report received from the NG-RAN for a
 *   target UE. The NRPPa response or report may be E-CID MEASUREMENT INITIATION
 *   RESPONSE, E-CID MEASUREMENT REPORT or OTDOA INFORMATION RESPONSE.
 *
 * - AMF receives an Namf_Communication_N1N2MessageTransfer (see TS 29.518 [22])
 *   from LMF to request the transfer of a LPP message to a target UE as part of
 *   a LPP positioning activity.
 *
 * - AMF sends an Namf_Communication_N1MessageNotify (see TS 29.518 [22]) to LMF
 *   to forward a LPP message received from the target UE.
 *
 * The AMFPositioningInfoTransfer record is also used by LARF to deliver E-CID
 * measurements responses to MDF2, as described in clause 7.3.5.6. The IRI-POI
 * in the AMF shall not generate the AMFPositioningInfoTransfer xIRI when the
 * E-CID measurement response is received as the result of a LARF request, as
 * described in TS 33.127 [5], clause 7.3.5.2.
 *
 * NOTE: In case the AMFPositioningInfoTransfer record is created as a result of
 * a LARF request, the LCS Correlation ID shall be created by the LARF, as part
 * of the E-CID measurement procedure, in order to link the request to the
 * response.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFPositioningInfoTransfer ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     sUCI                        [2] SUCI OPTIONAL,
 *     pEI                         [3] PEI OPTIONAL,
 *     gPSI                        [4] GPSI OPTIONAL,
 *     gUTI                        [5] FiveGGUTI OPTIONAL,
 *     nRPPaMessage                [6] OCTET STRING OPTIONAL,
 *     lPPMessage                  [7] OCTET STRING OPTIONAL,
 *     lcsCorrelationId            [8] UTF8String (SIZE(1..255)),
 *     additionalUserIdentifiers   [9] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFPositioningInfoTransfer {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the procedure (see NOTE 1 in table 6.2.2.2.7-1).
     * NOTE: In case the AMFPositioningInfoTransfer record is created as a
     * result of a LARF request, the LCS Correlation ID shall be created by the
     * LARF, as part of the E-CID measurement procedure, in order to link the
     * request to the response.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `sUCI`.
     * @description
     *
     * SUCI used in the procedure, if applicable and if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly sUCI: OPTIONAL<SUCI>;
    /**
     * @summary `pEI`.
     * @description
     *
     * PEI used in the procedure, if available (see NOTE 1 in table
     * 6.2.2.2.7-1). NOTE: In case the AMFPositioningInfoTransfer record is
     * created as a result of a LARF request, the LCS Correlation ID shall be
     * created by the LARF, as part of the E-CID measurement procedure, in order
     * to link the request to the response.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI used in the procedure, if available (see NOTE 1 in table
     * 6.2.2.2.7-1). NOTE: In case the AMFPositioningInfoTransfer record is
     * created as a result of a LARF request, the LCS Correlation ID shall be
     * created by the LARF, as part of the E-CID measurement procedure, in order
     * to link the request to the response.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `gUTI`.
     * @description
     *
     * 5G-GUTI used in the procedure, see TS 24.501 [13] clause 9.11.3.4.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly gUTI: OPTIONAL<FiveGGUTI>;
    /**
     * @summary `nRPPaMessage`.
     * @description
     *
     * Any UE associated NRPPa message exchanged between the LMF and NG-RAN via
     * AMF.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly nRPPaMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lPPMessage`.
     * @description
     *
     * Any LPP message exchanged between the LMF and the target UE via AMF.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly lPPMessage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lcsCorrelationId`.
     * @description
     *
     * LCS correlation ID (see TS 29.572 [24] clause 6.1.6.3.2) related to a
     * location session, found in the Namf_CommunicationN1N2MessageTransfer and
     * corresponding Namf_Communication_N2InfoNotify or
     * Namf_CommunicationN1MessageNotify. All the AMFPositioningInfoTransfer
     * records related to the same location session have the same
     * lcsCorrelationId (see NOTE). NOTE: In case the AMFPositioningInfoTransfer
     * record is created as a result of a LARF request, the LCS Correlation ID
     * shall be created by the LARF, as part of the E-CID measurement procedure,
     * in order to link the request to the response.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly lcsCorrelationId: UTF8String;
    /**
     * @summary `additionalUserIdentifiers`.
     * @description
     *
     * Provides additional user identifiers known at the AMF or stored in AMF
     * context, e.g. additional GPSI.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.8.
     *
     * @public
     * @readonly
     */
    readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        sUCI: OPTIONAL<SUCI>,
        pEI: OPTIONAL<PEI>,
        gPSI: OPTIONAL<GPSI>,
        gUTI: OPTIONAL<FiveGGUTI>,
        nRPPaMessage: OPTIONAL<OCTET_STRING>,
        lPPMessage: OPTIONAL<OCTET_STRING>,
        lcsCorrelationId: UTF8String,
        additionalUserIdentifiers?: OPTIONAL<UserIdentifiers>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.sUCI = sUCI;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.gUTI = gUTI;
        this.nRPPaMessage = nRPPaMessage;
        this.lPPMessage = lPPMessage;
        this.lcsCorrelationId = lcsCorrelationId;
        this.additionalUserIdentifiers = additionalUserIdentifiers;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AMFPositioningInfoTransfer
     * @description
     * 
     * This takes an `object` and converts it to a `AMFPositioningInfoTransfer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFPositioningInfoTransfer`.
     * @returns {AMFPositioningInfoTransfer}
     */
    public static _from_object (_o: { [_K in keyof (AMFPositioningInfoTransfer)]: (AMFPositioningInfoTransfer)[_K] }): AMFPositioningInfoTransfer {
        return new AMFPositioningInfoTransfer(_o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.nRPPaMessage, _o.lPPMessage, _o.lcsCorrelationId, _o.additionalUserIdentifiers, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AMFPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFPositioningInfoTransfer: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gUTI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nRPPaMessage", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("lPPMessage", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("lcsCorrelationId", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of AMFPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFPositioningInfoTransfer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFPositioningInfoTransfer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFPositioningInfoTransfer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFPositioningInfoTransfer: $.ASN1Decoder<AMFPositioningInfoTransfer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFPositioningInfoTransfer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFPositioningInfoTransfer (el: _Element): AMFPositioningInfoTransfer {
    if (!_cached_decoder_for_AMFPositioningInfoTransfer) { _cached_decoder_for_AMFPositioningInfoTransfer = function (el: _Element): AMFPositioningInfoTransfer {
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI: OPTIONAL<FiveGGUTI>;
    let nRPPaMessage: OPTIONAL<OCTET_STRING>;
    let lPPMessage: OPTIONAL<OCTET_STRING>;
    let lcsCorrelationId!: UTF8String;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "nRPPaMessage": (_el: _Element): void => { nRPPaMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lPPMessage": (_el: _Element): void => { lPPMessage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsCorrelationId": (_el: _Element): void => {
            lcsCorrelationId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (lcsCorrelationId.length < 1 || lcsCorrelationId.length > 255) {
                throw new ASN1SizeError("AMFPositioningInfoTransfer.lcsCorrelationId violates SIZE constraint");
            }
        },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFPositioningInfoTransfer,
        _extension_additions_list_spec_for_AMFPositioningInfoTransfer,
        _root_component_type_list_2_spec_for_AMFPositioningInfoTransfer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AMFPositioningInfoTransfer(
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        nRPPaMessage,
        lPPMessage,
        lcsCorrelationId,
        additionalUserIdentifiers,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AMFPositioningInfoTransfer(el);
}

let _cached_encoder_for_AMFPositioningInfoTransfer: $.ASN1Encoder<AMFPositioningInfoTransfer> | null = null;

/**
 * @summary Encodes a(n) AMFPositioningInfoTransfer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFPositioningInfoTransfer, encoded as an ASN.1 Element.
 */
export
function _encode_AMFPositioningInfoTransfer (value: AMFPositioningInfoTransfer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFPositioningInfoTransfer) { _cached_encoder_for_AMFPositioningInfoTransfer = function (value: AMFPositioningInfoTransfer, elGetter: $.ASN1Encoder<AMFPositioningInfoTransfer>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    if (value.sUCI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    if (value.gUTI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER);
    }
    if (value.nRPPaMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.nRPPaMessage, $.BER);
    }
    if (value.lPPMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.lPPMessage, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeUTF8String, $.BER)(value.lcsCorrelationId, $.BER);
    if (value.additionalUserIdentifiers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AMFPositioningInfoTransfer(value, elGetter);
}


/* eslint-enable */
