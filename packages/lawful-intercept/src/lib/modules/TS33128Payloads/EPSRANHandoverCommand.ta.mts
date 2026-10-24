/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
// export { MMEUES1APID, _decode_MMEUES1APID, _encode_MMEUES1APID } from "../TS33128Payloads/MMEUES1APID.ta.mjs";
import { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
// export { RANUES1APID, _decode_RANUES1APID, _encode_RANUES1APID } from "../TS33128Payloads/RANUES1APID.ta.mjs";
import { EPSHandoverType, _decode_EPSHandoverType, _encode_EPSHandoverType } from "../TS33128Payloads/EPSHandoverType.ta.mjs";
// export { EPSHandoverType, _decode_EPSHandoverType, _encode_EPSHandoverType } from "../TS33128Payloads/EPSHandoverType.ta.mjs";
import { ERABContextList, _decode_ERABContextList, _encode_ERABContextList } from "../TS33128Payloads/ERABContextList.ta.mjs";
// export { ERABContextList, _decode_ERABContextList, _encode_ERABContextList } from "../TS33128Payloads/ERABContextList.ta.mjs";
import { ERABReleaseList, _decode_ERABReleaseList, _encode_ERABReleaseList } from "../TS33128Payloads/ERABReleaseList.ta.mjs";
// export { ERABReleaseList, _decode_ERABReleaseList, _encode_ERABReleaseList } from "../TS33128Payloads/ERABReleaseList.ta.mjs";
import { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";
// export { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";


/**
 * @summary EPSRANHandoverCommand
 * @description
 * 
 * 6.3.2.2.9.1 General
 *
 * The present clause provides the LI requirements for S1 interface-based
 * handovers which occur for a target UE. Such handovers may be intra EPS
 * (inter-eNB), 5GS to EPS (inter-system), EPS to 5GS (inter-system), EPS to
 * UTRA (inter-system) or EPS to GERA (inter-system).
 *
 * The following xIRI records are used to report handover related events between
 * the MME and RAN nodes for the target UE when the delivery of location
 * information is not restricted by service scoping:
 *
 * - EPSRANHandoverCommand.
 *
 * - EPSRANHandoverRequest.
 *
 * The above xIRIs are used to report handover events and information that are
 * not carried in the MMELocationUpdate (clause 6.3.2.2.5) record and shall
 * include the information transferred between the MME and RAN nodes, as a part
 * of handover preparation, resource allocation, and handover notification.
 *
 * 6.3.2.2.9.2 Handover command
 *
 * The IRI-POI in the MME shall generate an xIRI containing an
 * EPSRANHandoverCommand record when the IRI-POI present in the MME detects that
 * the MME has sent a HANDOVER COMMAND message to the source RAN node (old RAN
 * node) in response to a HANDOVER REQUIRED message for the target UE and
 * location information is not restricted by service scoping.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.9.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANHandoverCommand ::= SEQUENCE
 * {
 *     userIdentifiers          [1] UserIdentifiers,
 *     mMEUES1APID              [2] MMEUES1APID,
 *     eNBUES1APID              [3] RANUES1APID,
 *     handoverType             [4] EPSHandoverType,
 *     eRABsToBeForwarded       [5] ERABContextList OPTIONAL,
 *     eRABsToRelease           [6] ERABReleaseList OPTIONAL,
 *     targetToSourceContainers [7] SEQUENCE SIZE(1..MAX) OF RANTargetToSourceContainer
 * }
 * ```
 * 
 * @class
 */
export
class EPSRANHandoverCommand {
    /**
     * @summary `userIdentifiers`.
     * @description
     *
     * List of identifiers, including the target identifier, associated with the
     * target UE registration stored in the MME context. See TS 23.401 [50]
     * clause 5.7.2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly userIdentifiers: UserIdentifiers;
    /**
     * @summary `mMEUES1APID`.
     * @description
     *
     * Identity that the MME uses to uniquely identify the target UE over the S1
     * Interface. See TS 36.413 [38] clause 9.2.3.3. This is correlated to the
     * IMSI known in the UE context at the MME.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly mMEUES1APID: MMEUES1APID;
    /**
     * @summary `eNBUES1APID`.
     * @description
     *
     * Identity that the MME receives from the eNB uniquely identifying the
     * target UE with the eNB. See TS 36.413 [38] clause 9.2.3.4.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly eNBUES1APID: RANUES1APID;
    /**
     * @summary `handoverType`.
     * @description
     *
     * Identifies the type of handover indicated by the source RAN node to the
     * MME. See TS 36.413 [38] clause 9.2.1.3.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly handoverType: EPSHandoverType;
    /**
     * @summary `eRABsToBeForwarded`.
     * @description
     *
     * Contains a list of any E-RABs that are subject to forwarding. Shall be
     * present if there are any E-RABs to be forwarded listed in the handover
     * command. See TS 36.413 [38] clause 9.1.5.2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly eRABsToBeForwarded: OPTIONAL<ERABContextList>;
    /**
     * @summary `eRABsToRelease`.
     * @description
     *
     * Contains a list of any E-RABs that are to be released. Shall be present
     * if there are any E-RABs to be released listed in the handover command.
     * See TS 36.413 [38] clause 9.1.5.2.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly eRABsToRelease: OPTIONAL<ERABReleaseList>;
    /**
     * @summary `targetToSourceContainers`.
     * @description
     *
     * Provides radio related information about the gaining RAN node. See TS
     * 36.413 [38] clause 9.2.1.57.
     *
     * 3GPP TS 33.128, clause 6.3.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly targetToSourceContainers: RANTargetToSourceContainer[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userIdentifiers: UserIdentifiers,
        mMEUES1APID: MMEUES1APID,
        eNBUES1APID: RANUES1APID,
        handoverType: EPSHandoverType,
        eRABsToBeForwarded: OPTIONAL<ERABContextList>,
        eRABsToRelease: OPTIONAL<ERABReleaseList>,
        targetToSourceContainers: RANTargetToSourceContainer[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userIdentifiers = userIdentifiers;
        this.mMEUES1APID = mMEUES1APID;
        this.eNBUES1APID = eNBUES1APID;
        this.handoverType = handoverType;
        this.eRABsToBeForwarded = eRABsToBeForwarded;
        this.eRABsToRelease = eRABsToRelease;
        this.targetToSourceContainers = targetToSourceContainers;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EPSRANHandoverCommand
     * @description
     * 
     * This takes an `object` and converts it to a `EPSRANHandoverCommand`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSRANHandoverCommand`.
     * @returns {EPSRANHandoverCommand}
     */
    public static _from_object (_o: { [_K in keyof (EPSRANHandoverCommand)]: (EPSRANHandoverCommand)[_K] }): EPSRANHandoverCommand {
        return new EPSRANHandoverCommand(_o.userIdentifiers, _o.mMEUES1APID, _o.eNBUES1APID, _o.handoverType, _o.eRABsToBeForwarded, _o.eRABsToRelease, _o.targetToSourceContainers, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EPSRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSRANHandoverCommand: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mMEUES1APID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eNBUES1APID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("handoverType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eRABsToBeForwarded", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("eRABsToRelease", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("targetToSourceContainers", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of EPSRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSRANHandoverCommand: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSRANHandoverCommand: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSRANHandoverCommand: $.ASN1Decoder<EPSRANHandoverCommand> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSRANHandoverCommand
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSRANHandoverCommand (el: _Element): EPSRANHandoverCommand {
    if (!_cached_decoder_for_EPSRANHandoverCommand) { _cached_decoder_for_EPSRANHandoverCommand = function (el: _Element): EPSRANHandoverCommand {
    let userIdentifiers!: UserIdentifiers;
    let mMEUES1APID!: MMEUES1APID;
    let eNBUES1APID!: RANUES1APID;
    let handoverType!: EPSHandoverType;
    let eRABsToBeForwarded: OPTIONAL<ERABContextList>;
    let eRABsToRelease: OPTIONAL<ERABReleaseList>;
    let targetToSourceContainers!: RANTargetToSourceContainer[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "mMEUES1APID": (_el: _Element): void => { mMEUES1APID = $._decode_implicit<MMEUES1APID>(() => _decode_MMEUES1APID)(_el); },
        "eNBUES1APID": (_el: _Element): void => { eNBUES1APID = $._decode_implicit<RANUES1APID>(() => _decode_RANUES1APID)(_el); },
        "handoverType": (_el: _Element): void => { handoverType = $._decode_implicit<EPSHandoverType>(() => _decode_EPSHandoverType)(_el); },
        "eRABsToBeForwarded": (_el: _Element): void => { eRABsToBeForwarded = $._decode_implicit<ERABContextList>(() => _decode_ERABContextList)(_el); },
        "eRABsToRelease": (_el: _Element): void => { eRABsToRelease = $._decode_implicit<ERABReleaseList>(() => _decode_ERABReleaseList)(_el); },
        "targetToSourceContainers": (_el: _Element): void => {
            targetToSourceContainers = $._decode_implicit<RANTargetToSourceContainer[]>(() => $._decodeSequenceOf<RANTargetToSourceContainer>(() => _decode_RANTargetToSourceContainer))(_el);
            if (targetToSourceContainers.length < 1) {
                throw new ASN1SizeError("EPSRANHandoverCommand.targetToSourceContainers violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSRANHandoverCommand,
        _extension_additions_list_spec_for_EPSRANHandoverCommand,
        _root_component_type_list_2_spec_for_EPSRANHandoverCommand,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EPSRANHandoverCommand(
        userIdentifiers,
        mMEUES1APID,
        eNBUES1APID,
        handoverType,
        eRABsToBeForwarded,
        eRABsToRelease,
        targetToSourceContainers,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EPSRANHandoverCommand(el);
}

let _cached_encoder_for_EPSRANHandoverCommand: $.ASN1Encoder<EPSRANHandoverCommand> | null = null;

/**
 * @summary Encodes a(n) EPSRANHandoverCommand into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSRANHandoverCommand, encoded as an ASN.1 Element.
 */
export
function _encode_EPSRANHandoverCommand (value: EPSRANHandoverCommand, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSRANHandoverCommand) { _cached_encoder_for_EPSRANHandoverCommand = function (value: EPSRANHandoverCommand, elGetter: $.ASN1Encoder<EPSRANHandoverCommand>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMEUES1APID, $.BER)(value.mMEUES1APID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RANUES1APID, $.BER)(value.eNBUES1APID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_EPSHandoverType, $.BER)(value.handoverType, $.BER);
    if (value.eRABsToBeForwarded !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ERABContextList, $.BER)(value.eRABsToBeForwarded, $.BER);
    }
    if (value.eRABsToRelease !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ERABReleaseList, $.BER)(value.eRABsToRelease, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<RANTargetToSourceContainer>(() => _encode_RANTargetToSourceContainer, $.BER), $.BER)(value.targetToSourceContainers, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSRANHandoverCommand(value, elGetter);
}


/* eslint-enable */
