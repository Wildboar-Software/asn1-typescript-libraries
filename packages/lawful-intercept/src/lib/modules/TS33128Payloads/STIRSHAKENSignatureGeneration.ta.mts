/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
// export { PASSporT, _decode_PASSporT, _encode_PASSporT } from "../TS33128Payloads/PASSporT.ta.mjs";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";


/**
 * @summary STIRSHAKENSignatureGeneration
 * @description
 * 
 * The IRI-POI present in the Telephony AS or IBCF, shall generate an xIRI
 * containing a STIRSHAKENSignatureGeneration record under the following
 * conditions:
 *
 * - Telephony AS or IBCF is interacting with the SIGNING AS. Whether it is the
 *   Telephony AS or IBCF for sessions is based on network configuration and
 *   local policy of the CSP as described in clause 7.11.2.4.
 *
 * - When P-Asserted Identity or From header of SIP INVITE request received from
 *   S-CSCF is a target identity with the conditions mentioned below:
 *
 * - The identities in one or both of those headers are used to interact with
 *   the SIGNING AS.
 *
 * - The "shaken" PASSporT is not received in the SIP INVITE request from the
 *   S-CSCF.
 *
 * - The "shaken" PASSporT with those identities in the "orig" claim is received
 *   from the SIGNING AS.
 *
 * - The "shaken" PASSporT with those identities in the "orig" claim is included
 *   in the outgoing SIP INVITE.
 *
 * - When the "ReportDiversionPASSporTInfo" parameter is set to "True" in the
 *   ActivateTask with P-Asserted Identity or From header of SIP INVITE request
 *   received from S-CSCF is a target identity with the conditions mentioned
 *   below:
 *
 * - The identities in one or both of those headers are used to interact with
 *   the SIGNING AS.
 *
 * - A "div" PASSporT with those identities in the "orig" claim of "div"
 *   PASSporT is received from the SIGNING AS.
 *
 * - The "div" PASSporT with those identities in the "orig" claim is included in
 *   the outgoing SIP INVITE.
 *
 * - When Diversion header or the History Info of SIP INVITE request received
 *   from the S-CSCF includes a target identity with the conditions mentioned
 *   below:
 *
 * - The identities in one or both of those headers are used to interact with
 *   the SIGNING AS.
 *
 * - The "div" PASSporT with those identities in the "div" claim is not received
 *   in the SIP INVITE request from the S-CSCF.
 *
 * - The "div" PASSporT with those identities in the "div" claim is received
 *   from the SIGNING AS.
 *
 * - The "div" PASSporT with those identities in the "div" claim is included in
 *   the outgoing SIP INVITE.
 *
 * - The identities in P-Asserted Identity or From of SIP INVITE received from
 *   the S-CSCF are used to interact with the SIGNING AS.
 *
 * - A "div" PASSporT with the identities in P-Asserted Identity or From of SIP
 *   INVITE request received from S-CSCF are included in the "orig" claim of
 *   "div" PASSporT received from the SIGNING AS.
 *
 * - The "div" PASSporT with the identities in P-Asserted Identity or From of
 *   SIP INVITE request received from S-CSCF are included in the "orig" claim of
 *   "div" PASSporT in the outgoing SIP INVITE.
 *
 * - When the "ReportDiversionPASSporTInfo" parameter is set to "True" in the
 *   ActivateTask with Diversion or HistoryInfo header of SIP INVITE request
 *   received from S-CSCF includes the target identity with the conditions
 *   mentioned below:
 *
 * - The identities in P-Asserted Identity or From of SIP INVITE received from
 *   the S-CSCF are used to interact with the SIGNING AS.
 *
 * - A "div" PASSporT with the identities in P-Asserted Identity or From of SIP
 *   INVITE request received from S-CSCF are included in the "orig" claim of
 *   "div" PASSporT received from the SIGNING AS.
 *
 * - The "div" PASSporT with the identities in P-Asserted Identity or From of
 *   SIP INVITE request received from S-CSCF are included in the "orig" claim of
 *   "div" PASSporT in the outgoing SIP INVITE.
 *
 * - The "div" PASSporT with that identity in the "div" claim was previously
 *   received in the SIP INVITE request from the S-CSCF or from the Signing AS.
 *
 * - When Request URI of outgoing SIP INVITE is a target non-local ID and is
 *   present in the "dest" claim of "shaken" or "div" PASSporT received from the
 *   SIGNING AS and the same is included in the outgoing SIP INVITE.
 *
 * - When Telephony AS is interacting with the SIGNING AS, and when Request URI
 *   of SIP INVITE received from the S-CSCF is a target identity with the
 *   conditions mentioned below:
 *
 * - The identity is used to interact with the SIGNING AS.
 *
 * - The "div" PASSporT with that identity in the "div" claim is received from
 *   the SIGNING AS.
 *
 * - The "div" PASSporT with that identity in the "div" claim is included in the
 *   outgoing SIP INVITE.
 *
 * When the target is local to the network (i.e. not a target non-local ID), the
 * STIRSHAKENSignatureGeneration includes only the PASSporT received in the
 * SIGING AS response with the following rules:
 *
 * - If REQUEST URI or To header in the SIP INVITE received from the S-CSCF is a
 *   target identity, then only the "div" PASSporT received from the SIGNING AS
 *   with those identities in the "div" claim of "div" PASSporT.
 *
 * - When the "ReportDiversionPASSporTInfo" parameter is set to "False" in the
 *   ActivateTask:
 *
 * - If P-Asserted Identity or From header in the SIP INVITE received from the
 *   S-CSCF is a target identity, then only "shaken" PASSporT received from the
 *   SIGNING AS with those identities in the "orig" claim of the "shaken"
 *   PASSporT.
 *
 * - If Diversion or HistoryInfo header in the SIP INVITE received from the
 *   S-CSCF is a target identity, then only the "div" PASSporT received from the
 *   SIGNING AS with those identities in the "div" claim of "div" PASSporT.
 *
 * - If REQUEST URI or To header in the SIP INVITE received from the S-CSCF is a
 *   target identity, then only the "div" PASSporT received from the SIGNING AS
 *   with those identities in the "div" claim of "div" PASSporT.
 *
 * - When the "ReportDiversionPASSporTInfo" parameter is set to "True" in the
 *   ActivateTask, in addition to the reporting as described above (for
 *   "ReportDiversionPASSporTInfo" parameter is set to "False"), also report the
 *   "div" PASSporTs for all the subsequent redirections that have the identity
 *   of the P-Asserted Identity or the From header in the "orig" claim of those
 *   PASSporTs.
 *
 * When the target is non-local ID, STIRSHAKENSignatureGeneration includes all
 * of the PASSporT included in the outgoing SIP message.
 *
 * The following table contains parameters, with IRITargetIdentifier, generated
 * by the IRI-POI.
 *
 * NOTE 1: Void.
 *
 * NOTE 2: The same SIP message may be encapsulated in the xIRI IMSMessage as
 * well.
 *
 * Table 7.11.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.11.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STIRSHAKENSignatureGeneration ::= SEQUENCE
 * {
 *     pASSporTs                 [1] SEQUENCE OF PASSporT,
 *     encapsulatedSIPMessage    [2] SIPMessage OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class STIRSHAKENSignatureGeneration {
    /**
     * @summary `pASSporTs`.
     * @description
     *
     * Identifies the content of the SIP Identity headers added by networks.
     * This is a set of PASSporT parameter. See table 7.11.2.2-2.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly pASSporTs: PASSporT[];
    /**
     * @summary `encapsulatedSIPMessage`.
     * @description
     *
     * Encapsulated SIP INVITE request that includes SIP Identity header
     * carrying the PASSporT (Outgoing SIP request) based on the structure
     * defined in table 7.12.4.2-2 (see NOTE 2 below). Shall be provided. This
     * parameter is conditional only for backwards compatibility. NOTE 2: The
     * same SIP message may be encapsulated in the xIRI IMSMessage as well.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly encapsulatedSIPMessage: OPTIONAL<SIPMessage>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pASSporTs: PASSporT[],
        encapsulatedSIPMessage?: OPTIONAL<SIPMessage>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pASSporTs = pASSporTs;
        this.encapsulatedSIPMessage = encapsulatedSIPMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a STIRSHAKENSignatureGeneration
     * @description
     * 
     * This takes an `object` and converts it to a `STIRSHAKENSignatureGeneration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `STIRSHAKENSignatureGeneration`.
     * @returns {STIRSHAKENSignatureGeneration}
     */
    public static _from_object (_o: { [_K in keyof (STIRSHAKENSignatureGeneration)]: (STIRSHAKENSignatureGeneration)[_K] }): STIRSHAKENSignatureGeneration {
        return new STIRSHAKENSignatureGeneration(_o.pASSporTs, _o.encapsulatedSIPMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    new $.ComponentSpec("pASSporTs", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("encapsulatedSIPMessage", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of STIRSHAKENSignatureGeneration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_STIRSHAKENSignatureGeneration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_STIRSHAKENSignatureGeneration: $.ASN1Decoder<STIRSHAKENSignatureGeneration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) STIRSHAKENSignatureGeneration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_STIRSHAKENSignatureGeneration (el: _Element): STIRSHAKENSignatureGeneration {
    if (!_cached_decoder_for_STIRSHAKENSignatureGeneration) { _cached_decoder_for_STIRSHAKENSignatureGeneration = function (el: _Element): STIRSHAKENSignatureGeneration {
    let pASSporTs!: PASSporT[];
    let encapsulatedSIPMessage: OPTIONAL<SIPMessage>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pASSporTs": (_el: _Element): void => { pASSporTs = $._decode_implicit<PASSporT[]>(() => $._decodeSequenceOf<PASSporT>(() => _decode_PASSporT))(_el); },
        "encapsulatedSIPMessage": (_el: _Element): void => { encapsulatedSIPMessage = $._decode_implicit<SIPMessage>(() => _decode_SIPMessage)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_STIRSHAKENSignatureGeneration,
        _extension_additions_list_spec_for_STIRSHAKENSignatureGeneration,
        _root_component_type_list_2_spec_for_STIRSHAKENSignatureGeneration,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new STIRSHAKENSignatureGeneration(
        pASSporTs,
        encapsulatedSIPMessage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_STIRSHAKENSignatureGeneration(el);
}

let _cached_encoder_for_STIRSHAKENSignatureGeneration: $.ASN1Encoder<STIRSHAKENSignatureGeneration> | null = null;

/**
 * @summary Encodes a(n) STIRSHAKENSignatureGeneration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The STIRSHAKENSignatureGeneration, encoded as an ASN.1 Element.
 */
export
function _encode_STIRSHAKENSignatureGeneration (value: STIRSHAKENSignatureGeneration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_STIRSHAKENSignatureGeneration) { _cached_encoder_for_STIRSHAKENSignatureGeneration = function (value: STIRSHAKENSignatureGeneration, elGetter: $.ASN1Encoder<STIRSHAKENSignatureGeneration>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<PASSporT>(() => _encode_PASSporT, $.BER), $.BER)(value.pASSporTs, $.BER);
    if (value.encapsulatedSIPMessage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SIPMessage, $.BER)(value.encapsulatedSIPMessage, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_STIRSHAKENSignatureGeneration(value, elGetter);
}


/* eslint-enable */
