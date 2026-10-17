/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
// export { AMFUENGAPID, _decode_AMFUENGAPID, _encode_AMFUENGAPID } from "../TS33128Payloads/AMFUENGAPID.ta.mjs";
import { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
// export { RANUENGAPID, _decode_RANUENGAPID, _encode_RANUENGAPID } from "../TS33128Payloads/RANUENGAPID.ta.mjs";
import { HandoverType, _decode_HandoverType, _encode_HandoverType, _enum_for_HandoverType } from "../TS33128Payloads/HandoverType.ta.mjs";
// export { HandoverType, _enum_for_HandoverType, HandoverType_intra5GS /* IMPORTED_LONG_ENUMERATION_ITEM */, intra5GS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_fiveGStoEPS /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGStoEPS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_ePSto5GS /* IMPORTED_LONG_ENUMERATION_ITEM */, ePSto5GS /* IMPORTED_SHORT_ENUMERATION_ITEM */, HandoverType_fiveGStoUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, fiveGStoUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HandoverType, _encode_HandoverType } from "../TS33128Payloads/HandoverType.ta.mjs";
import { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";
// export { RANTargetToSourceContainer, _decode_RANTargetToSourceContainer, _encode_RANTargetToSourceContainer } from "../TS33128Payloads/RANTargetToSourceContainer.ta.mjs";


/**
 * @summary AMFRANHandoverCommand
 * @description
 * 
 * 6.2.2.2.9.1 General
 *
 * The present clause provides the LI requirements for NG interface-based
 * handovers which occur for a target UE. Such handovers may be intra 5GS
 * (inter-gNB), 5GS to EPS (inter-system), EPS to 5GS (inter-system), or 5GS to
 * UTRA (inter-system).
 *
 * The following xIRI records are used to report handover related events between
 * the AMF and RAN nodes for the target UE when the delivery of location
 * information is not restricted by service scoping:
 *
 * - AMFRANHandoverCommand.
 *
 * - AMFRANHandoverRequest.
 *
 * The above xIRIs are used to report handover events and information that are
 * not carried in the AMFLocationUpdate (clause 6.2.2.2.4) record and shall
 * include the information transferred between the AMF and RAN nodes, as a part
 * of handover preparation, resource allocation, and handover notification.
 *
 * 6.2.2.2.9.2 Handover command
 *
 * The IRI-POI in the AMF shall generate an xIRI containing an
 * AMFRANHandoverCommand record when the IRI-POI present in the AMF detects that
 * the AMF has sent a HANDOVER COMMAND message to the source RAN node (old RAN
 * node) in response to a HANDOVER REQUIRED message for the target UE and
 * location information is not restricted by service scoping.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.9.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRANHandoverCommand ::= SEQUENCE
 * {
 *     userIdentifiers              [1] UserIdentifiers,
 *     aMFUENGAPID                  [2] AMFUENGAPID,
 *     rANUENGAPID                  [3] RANUENGAPID,
 *     handoverType                 [4] HandoverType,
 *     targetToSourceContainer      [5] RANTargetToSourceContainer
 * }
 * ```
 * 
 * @class
 */
export
class AMFRANHandoverCommand {
    /**
     * @summary `userIdentifiers`.
     * @description
     *
     * List of identifiers, including the target identifier, associated with the
     * target UE registration stored in the AMF context. See TS 29.518 [22]
     * clause 6.1.6.2.25 and TS 23.502 [4] clause 4.11.2.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly userIdentifiers: UserIdentifiers;
    /**
     * @summary `aMFUENGAPID`.
     * @description
     *
     * Identity that the AMF uses to uniquely identify the target UE over the NG
     * Interface. See TS 38.413 [23] clause 9.3.3.1. This is correlated to the
     * SUPI known in the UE AMF context.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly aMFUENGAPID: AMFUENGAPID;
    /**
     * @summary `rANUENGAPID`.
     * @description
     *
     * Identity that the AMF receives from the NG-RAN node uniquely identifying
     * the target UE with the NG-RAN Node. See TS 38.413 [23] clause 9.3.3.2.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly rANUENGAPID: RANUENGAPID;
    /**
     * @summary `handoverType`.
     * @description
     *
     * Identifies the type of handover indicated by the source RAN node to the
     * AMF. See TS 38.413 [23] clause 9.3.1.22.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly handoverType: HandoverType;
    /**
     * @summary `targetToSourceContainer`.
     * @description
     *
     * Provides radio related information about the gaining RAN node. See TS
     * 38.413 [23] clause 9.3.1.21.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.9.2.
     *
     * @public
     * @readonly
     */
    readonly targetToSourceContainer: RANTargetToSourceContainer;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        userIdentifiers: UserIdentifiers,
        aMFUENGAPID: AMFUENGAPID,
        rANUENGAPID: RANUENGAPID,
        handoverType: HandoverType,
        targetToSourceContainer: RANTargetToSourceContainer,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.userIdentifiers = userIdentifiers;
        this.aMFUENGAPID = aMFUENGAPID;
        this.rANUENGAPID = rANUENGAPID;
        this.handoverType = handoverType;
        this.targetToSourceContainer = targetToSourceContainer;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AMFRANHandoverCommand
     * @description
     * 
     * This takes an `object` and converts it to a `AMFRANHandoverCommand`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFRANHandoverCommand`.
     * @returns {AMFRANHandoverCommand}
     */
    public static _from_object (_o: { [_K in keyof (AMFRANHandoverCommand)]: (AMFRANHandoverCommand)[_K] }): AMFRANHandoverCommand {
        return new AMFRANHandoverCommand(_o.userIdentifiers, _o.aMFUENGAPID, _o.rANUENGAPID, _o.handoverType, _o.targetToSourceContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `handoverType`
         * @public
         * @static
         */

    public static _enum_for_handoverType = _enum_for_HandoverType;
}

/**
 * @summary The Leading Root Component Types of AMFRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFRANHandoverCommand: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aMFUENGAPID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rANUENGAPID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("handoverType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("targetToSourceContainer", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of AMFRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFRANHandoverCommand: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFRANHandoverCommand
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFRANHandoverCommand: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFRANHandoverCommand: $.ASN1Decoder<AMFRANHandoverCommand> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFRANHandoverCommand
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFRANHandoverCommand (el: _Element): AMFRANHandoverCommand {
    if (!_cached_decoder_for_AMFRANHandoverCommand) { _cached_decoder_for_AMFRANHandoverCommand = function (el: _Element): AMFRANHandoverCommand {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("AMFRANHandoverCommand contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "userIdentifiers";
    sequence[1].name = "aMFUENGAPID";
    sequence[2].name = "rANUENGAPID";
    sequence[3].name = "handoverType";
    sequence[4].name = "targetToSourceContainer";
    let userIdentifiers!: UserIdentifiers;
    let aMFUENGAPID!: AMFUENGAPID;
    let rANUENGAPID!: RANUENGAPID;
    let handoverType!: HandoverType;
    let targetToSourceContainer!: RANTargetToSourceContainer;
    userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(sequence[0]);
    aMFUENGAPID = $._decode_implicit<AMFUENGAPID>(() => _decode_AMFUENGAPID)(sequence[1]);
    rANUENGAPID = $._decode_implicit<RANUENGAPID>(() => _decode_RANUENGAPID)(sequence[2]);
    handoverType = $._decode_implicit<HandoverType>(() => _decode_HandoverType)(sequence[3]);
    targetToSourceContainer = $._decode_implicit<RANTargetToSourceContainer>(() => _decode_RANTargetToSourceContainer)(sequence[4]);
    return new AMFRANHandoverCommand(
        userIdentifiers,
        aMFUENGAPID,
        rANUENGAPID,
        handoverType,
        targetToSourceContainer,
        sequence.slice(5),
    );
}; }
    return _cached_decoder_for_AMFRANHandoverCommand(el);
}

let _cached_encoder_for_AMFRANHandoverCommand: $.ASN1Encoder<AMFRANHandoverCommand> | null = null;

/**
 * @summary Encodes a(n) AMFRANHandoverCommand into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFRANHandoverCommand, encoded as an ASN.1 Element.
 */
export
function _encode_AMFRANHandoverCommand (value: AMFRANHandoverCommand, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFRANHandoverCommand) { _cached_encoder_for_AMFRANHandoverCommand = function (value: AMFRANHandoverCommand, elGetter: $.ASN1Encoder<AMFRANHandoverCommand>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AMFUENGAPID, $.BER)(value.aMFUENGAPID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_RANUENGAPID, $.BER)(value.rANUENGAPID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_HandoverType, $.BER)(value.handoverType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_RANTargetToSourceContainer, $.BER)(value.targetToSourceContainer, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AMFRANHandoverCommand(value, elGetter);
}


/* eslint-enable */
