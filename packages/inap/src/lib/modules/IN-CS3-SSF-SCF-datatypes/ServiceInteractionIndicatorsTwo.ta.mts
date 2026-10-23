/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ForwardServiceInteractionInd, _decode_ForwardServiceInteractionInd, _encode_ForwardServiceInteractionInd } from "../IN-CS3-SSF-SCF-datatypes/ForwardServiceInteractionInd.ta.mjs";
// export { ForwardServiceInteractionInd, _decode_ForwardServiceInteractionInd, _encode_ForwardServiceInteractionInd } from "../IN-CS3-SSF-SCF-datatypes/ForwardServiceInteractionInd.ta.mjs";
import { BackwardServiceInteractionInd, _decode_BackwardServiceInteractionInd, _encode_BackwardServiceInteractionInd } from "../IN-CS3-SSF-SCF-datatypes/BackwardServiceInteractionInd.ta.mjs";
// export { BackwardServiceInteractionInd, _decode_BackwardServiceInteractionInd, _encode_BackwardServiceInteractionInd } from "../IN-CS3-SSF-SCF-datatypes/BackwardServiceInteractionInd.ta.mjs";
import { BothwayThroughConnectionInd, _decode_BothwayThroughConnectionInd, _encode_BothwayThroughConnectionInd, _enum_for_BothwayThroughConnectionInd } from "../IN-CS3-SSF-SCF-datatypes/BothwayThroughConnectionInd.ta.mjs";
// export { BothwayThroughConnectionInd, _enum_for_BothwayThroughConnectionInd, BothwayThroughConnectionInd_bothwayPathRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, bothwayPathRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, BothwayThroughConnectionInd_bothwayPathNotRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, bothwayPathNotRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BothwayThroughConnectionInd, _encode_BothwayThroughConnectionInd } from "../IN-CS3-SSF-SCF-datatypes/BothwayThroughConnectionInd.ta.mjs";
import { SuspendTimer, _decode_SuspendTimer, _encode_SuspendTimer } from "../IN-CS3-SSF-SCF-datatypes/SuspendTimer.ta.mjs";
// export { SuspendTimer, _decode_SuspendTimer, _encode_SuspendTimer } from "../IN-CS3-SSF-SCF-datatypes/SuspendTimer.ta.mjs";
import { ConnectedNumberTreatmentInd, _decode_ConnectedNumberTreatmentInd, _encode_ConnectedNumberTreatmentInd, _enum_for_ConnectedNumberTreatmentInd } from "../IN-CS3-SSF-SCF-datatypes/ConnectedNumberTreatmentInd.ta.mjs";
// export { ConnectedNumberTreatmentInd, _enum_for_ConnectedNumberTreatmentInd, ConnectedNumberTreatmentInd_noINImpact /* IMPORTED_LONG_ENUMERATION_ITEM */, noINImpact /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectedNumberTreatmentInd_presentationRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, presentationRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectedNumberTreatmentInd_presentCalledINNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, presentCalledINNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, ConnectedNumberTreatmentInd_presentCalledINNumberRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, presentCalledINNumberRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ConnectedNumberTreatmentInd, _encode_ConnectedNumberTreatmentInd } from "../IN-CS3-SSF-SCF-datatypes/ConnectedNumberTreatmentInd.ta.mjs";
import { ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd, _decode_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd, _encode_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo-redirectServiceTreatmentInd.ta.mjs";
// export { ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd, _decode_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd, _encode_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo-redirectServiceTreatmentInd.ta.mjs";


/**
 * @summary ServiceInteractionIndicatorsTwo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInteractionIndicatorsTwo ::= SEQUENCE {
 *   forwardServiceInteractionInd       [0]  ForwardServiceInteractionInd OPTIONAL,
 *   -- applicable to operations IDP, CON, ICA, CWA.
 *   backwardServiceInteractionInd
 *     [1]  BackwardServiceInteractionInd OPTIONAL,
 *   -- applicable to operations IDP, CON, CTR, ETC, CWA.
 *   bothwayThroughConnectionInd        [2]  BothwayThroughConnectionInd OPTIONAL,
 *   -- applicable to operations CTR, ETC.
 *   suspendTimer                       [3]  SuspendTimer OPTIONAL,
 *   -- applicable to operations CON, ICA CWA.
 *   connectedNumberTreatmentInd        [4]  ConnectedNumberTreatmentInd OPTIONAL,
 *   --applicable to operations CON, CTR, ETC, CWA .
 *   suppressCallDiversionNotification  [5]  BOOLEAN OPTIONAL,
 *   -- applicable to CON, ICA, CWA
 *   suppressCallTransferNotification   [6]  BOOLEAN OPTIONAL,
 *   -- applicable to CON, ICA, CWA
 *   allowCdINNoPresentationInd         [7]  BOOLEAN OPTIONAL,
 *   -- applicable to CON, ICA CWA
 *   -- indicates whether the Address Presentation restricted indicator of the ISUP
 *   -- "called IN number" shall be set to presentation allowed (TRUE)
 *   --  or presentation restricted (FALSE). Refer to Rec. Q.1601.
 *   userDialogueDurationInd            [8]  BOOLEAN DEFAULT TRUE,
 *   -- applicable to operations CTR, ETC.
 *   -- applicable when interaction with the user is required during call set-up
 *   -- The interaction TRUE means the user interaction may last longer than 90 seconds.
 *   -- Otherwise the indicator should be set to FALSE. Used  for delaying ISUP T9 timer.
 *   overrideLineRestrictions           [9]  BOOLEAN DEFAULT FALSE,
 *   -- only applicable to operations  (e.g. Connect) which lead to a transition to a PIC before
 *   --  the AuthorizeCallSetup PIC.
 *   -- When set to TRUE, this parameter indicates that some facility restrictions
 *   -- should not be checked when the authority to place a call is verified in the
 *   --Authorize_Call_Setup PIC.
 *   -- Which restrictions are actually overwriden is network specific.
 *   suppressVPNAPP                     [10]  BOOLEAN DEFAULT FALSE,
 *   -- applicable to CWA, CON, ICA.
 *   -- indicates whether to allow or stop (suppress) the forward transmission of the VPN PSS1 capability.
 *   -- When set to TRUE, the  exchange, on receipt of this parameter, will not transmit for this call
 *   -- any ISUP Application transport parameter with Application Context Identifier set to " PSS1 ASE (VPN) "
 *   -- This indicator  is populated by the SCF, where the SCF and SSF in conjunction have provided the
 *   -- outgoing gateway PINX functionality as required by PSS1.
 *   calledINNumberOverriding           [11]  BOOLEAN OPTIONAL,
 *   -- applicable to CON and CWA
 *   -- indicates whether the generation/override of  the ISUP
 *   -- "called IN number"  is allowed (TRUE)   or  not allowed (FALSE)
 *   -- If set to FALSE, the ISUP shall not generate a "called IN number"  or override
 *   -- an already existing "called IN number".
 *   -- if absent , the default will be "generation/overriding allowed" (TRUE).
 *   redirectServiceTreatmentInd
 *     [12]  SEQUENCE {redirectReason  [0]  RedirectReason OPTIONAL,
 *                     ...} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServiceInteractionIndicatorsTwo {
    /**
     * @summary `forwardServiceInteractionInd`.
     * @public
     * @readonly
     */
    readonly forwardServiceInteractionInd: OPTIONAL<ForwardServiceInteractionInd>;
    /**
     * @summary `backwardServiceInteractionInd`.
     * @public
     * @readonly
     */
    readonly backwardServiceInteractionInd: OPTIONAL<BackwardServiceInteractionInd>;
    /**
     * @summary `bothwayThroughConnectionInd`.
     * @public
     * @readonly
     */
    readonly bothwayThroughConnectionInd: OPTIONAL<BothwayThroughConnectionInd>;
    /**
     * @summary `suspendTimer`.
     * @public
     * @readonly
     */
    readonly suspendTimer: OPTIONAL<SuspendTimer>;
    /**
     * @summary `connectedNumberTreatmentInd`.
     * @public
     * @readonly
     */
    readonly connectedNumberTreatmentInd: OPTIONAL<ConnectedNumberTreatmentInd>;
    /**
     * @summary `suppressCallDiversionNotification`.
     * @public
     * @readonly
     */
    readonly suppressCallDiversionNotification: OPTIONAL<BOOLEAN>;
    /**
     * @summary `suppressCallTransferNotification`.
     * @public
     * @readonly
     */
    readonly suppressCallTransferNotification: OPTIONAL<BOOLEAN>;
    /**
     * @summary `allowCdINNoPresentationInd`.
     * @public
     * @readonly
     */
    readonly allowCdINNoPresentationInd: OPTIONAL<BOOLEAN>;
    /**
     * @summary `userDialogueDurationInd`.
     * @public
     * @readonly
     */
    readonly userDialogueDurationInd: OPTIONAL<BOOLEAN>;
    /**
     * @summary `overrideLineRestrictions`.
     * @public
     * @readonly
     */
    readonly overrideLineRestrictions: OPTIONAL<BOOLEAN>;
    /**
     * @summary `suppressVPNAPP`.
     * @public
     * @readonly
     */
    readonly suppressVPNAPP: OPTIONAL<BOOLEAN>;
    /**
     * @summary `calledINNumberOverriding`.
     * @public
     * @readonly
     */
    readonly calledINNumberOverriding: OPTIONAL<BOOLEAN>;
    /**
     * @summary `redirectServiceTreatmentInd`.
     * @public
     * @readonly
     */
    readonly redirectServiceTreatmentInd: OPTIONAL<ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd>;

    constructor (
        forwardServiceInteractionInd: OPTIONAL<ForwardServiceInteractionInd>,
        backwardServiceInteractionInd: OPTIONAL<BackwardServiceInteractionInd>,
        bothwayThroughConnectionInd: OPTIONAL<BothwayThroughConnectionInd>,
        suspendTimer: OPTIONAL<SuspendTimer>,
        connectedNumberTreatmentInd: OPTIONAL<ConnectedNumberTreatmentInd>,
        suppressCallDiversionNotification: OPTIONAL<BOOLEAN>,
        suppressCallTransferNotification: OPTIONAL<BOOLEAN>,
        allowCdINNoPresentationInd: OPTIONAL<BOOLEAN>,
        userDialogueDurationInd: OPTIONAL<BOOLEAN>,
        overrideLineRestrictions: OPTIONAL<BOOLEAN>,
        suppressVPNAPP: OPTIONAL<BOOLEAN>,
        calledINNumberOverriding: OPTIONAL<BOOLEAN>,
        redirectServiceTreatmentInd: OPTIONAL<ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd>
    ) {
        this.forwardServiceInteractionInd = forwardServiceInteractionInd;
        this.backwardServiceInteractionInd = backwardServiceInteractionInd;
        this.bothwayThroughConnectionInd = bothwayThroughConnectionInd;
        this.suspendTimer = suspendTimer;
        this.connectedNumberTreatmentInd = connectedNumberTreatmentInd;
        this.suppressCallDiversionNotification = suppressCallDiversionNotification;
        this.suppressCallTransferNotification = suppressCallTransferNotification;
        this.allowCdINNoPresentationInd = allowCdINNoPresentationInd;
        this.userDialogueDurationInd = userDialogueDurationInd;
        this.overrideLineRestrictions = overrideLineRestrictions;
        this.suppressVPNAPP = suppressVPNAPP;
        this.calledINNumberOverriding = calledINNumberOverriding;
        this.redirectServiceTreatmentInd = redirectServiceTreatmentInd;
    }

    /**
     * @summary Restructures an object into a ServiceInteractionIndicatorsTwo
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceInteractionIndicatorsTwo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceInteractionIndicatorsTwo`.
     * @returns {ServiceInteractionIndicatorsTwo}
     */
    public static _from_object (_o: { [_K in keyof (ServiceInteractionIndicatorsTwo)]: (ServiceInteractionIndicatorsTwo)[_K] }): ServiceInteractionIndicatorsTwo {
        return new ServiceInteractionIndicatorsTwo(_o.forwardServiceInteractionInd, _o.backwardServiceInteractionInd, _o.bothwayThroughConnectionInd, _o.suspendTimer, _o.connectedNumberTreatmentInd, _o.suppressCallDiversionNotification, _o.suppressCallTransferNotification, _o.allowCdINNoPresentationInd, _o.userDialogueDurationInd, _o.overrideLineRestrictions, _o.suppressVPNAPP, _o.calledINNumberOverriding, _o.redirectServiceTreatmentInd);
    }

    /**
     * @summary Getter that returns the default value for `userDialogueDurationInd`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_userDialogueDurationInd () { return true; }
    /**
     * @summary Getter that returns the default value for `overrideLineRestrictions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_overrideLineRestrictions () { return false; }
    /**
     * @summary Getter that returns the default value for `suppressVPNAPP`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_suppressVPNAPP () { return false; }        /**
         * @summary The enum used as the type of the component `bothwayThroughConnectionInd`
         * @public
         * @static
         */

    public static _enum_for_bothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;        /**
         * @summary The enum used as the type of the component `connectedNumberTreatmentInd`
         * @public
         * @static
         */

    public static _enum_for_connectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;
}

/**
 * @summary The Leading Root Component Types of ServiceInteractionIndicatorsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardServiceInteractionInd", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("backwardServiceInteractionInd", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bothwayThroughConnectionInd", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("suspendTimer", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("connectedNumberTreatmentInd", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("suppressCallDiversionNotification", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("suppressCallTransferNotification", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("allowCdINNoPresentationInd", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("userDialogueDurationInd", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("overrideLineRestrictions", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("suppressVPNAPP", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("calledINNumberOverriding", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("redirectServiceTreatmentInd", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of ServiceInteractionIndicatorsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceInteractionIndicatorsTwo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceInteractionIndicatorsTwo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceInteractionIndicatorsTwo: $.ASN1Decoder<ServiceInteractionIndicatorsTwo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceInteractionIndicatorsTwo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceInteractionIndicatorsTwo (el: _Element): ServiceInteractionIndicatorsTwo {
    if (!_cached_decoder_for_ServiceInteractionIndicatorsTwo) { _cached_decoder_for_ServiceInteractionIndicatorsTwo = function (el: _Element): ServiceInteractionIndicatorsTwo {
    let forwardServiceInteractionInd: OPTIONAL<ForwardServiceInteractionInd>;
    let backwardServiceInteractionInd: OPTIONAL<BackwardServiceInteractionInd>;
    let bothwayThroughConnectionInd: OPTIONAL<BothwayThroughConnectionInd>;
    let suspendTimer: OPTIONAL<SuspendTimer>;
    let connectedNumberTreatmentInd: OPTIONAL<ConnectedNumberTreatmentInd>;
    let suppressCallDiversionNotification: OPTIONAL<BOOLEAN>;
    let suppressCallTransferNotification: OPTIONAL<BOOLEAN>;
    let allowCdINNoPresentationInd: OPTIONAL<BOOLEAN>;
    let userDialogueDurationInd: OPTIONAL<BOOLEAN> = ServiceInteractionIndicatorsTwo._default_value_for_userDialogueDurationInd;
    let overrideLineRestrictions: OPTIONAL<BOOLEAN> = ServiceInteractionIndicatorsTwo._default_value_for_overrideLineRestrictions;
    let suppressVPNAPP: OPTIONAL<BOOLEAN> = ServiceInteractionIndicatorsTwo._default_value_for_suppressVPNAPP;
    let calledINNumberOverriding: OPTIONAL<BOOLEAN>;
    let redirectServiceTreatmentInd: OPTIONAL<ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd>;
    const callbacks: $.DecodingMap = {
        "forwardServiceInteractionInd": (_el: _Element): void => { forwardServiceInteractionInd = $._decode_implicit<ForwardServiceInteractionInd>(() => _decode_ForwardServiceInteractionInd)(_el); },
        "backwardServiceInteractionInd": (_el: _Element): void => { backwardServiceInteractionInd = $._decode_implicit<BackwardServiceInteractionInd>(() => _decode_BackwardServiceInteractionInd)(_el); },
        "bothwayThroughConnectionInd": (_el: _Element): void => { bothwayThroughConnectionInd = $._decode_implicit<BothwayThroughConnectionInd>(() => _decode_BothwayThroughConnectionInd)(_el); },
        "suspendTimer": (_el: _Element): void => { suspendTimer = $._decode_implicit<SuspendTimer>(() => _decode_SuspendTimer)(_el); },
        "connectedNumberTreatmentInd": (_el: _Element): void => { connectedNumberTreatmentInd = $._decode_implicit<ConnectedNumberTreatmentInd>(() => _decode_ConnectedNumberTreatmentInd)(_el); },
        "suppressCallDiversionNotification": (_el: _Element): void => { suppressCallDiversionNotification = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "suppressCallTransferNotification": (_el: _Element): void => { suppressCallTransferNotification = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "allowCdINNoPresentationInd": (_el: _Element): void => { allowCdINNoPresentationInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "userDialogueDurationInd": (_el: _Element): void => { userDialogueDurationInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "overrideLineRestrictions": (_el: _Element): void => { overrideLineRestrictions = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "suppressVPNAPP": (_el: _Element): void => { suppressVPNAPP = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "calledINNumberOverriding": (_el: _Element): void => { calledINNumberOverriding = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "redirectServiceTreatmentInd": (_el: _Element): void => { redirectServiceTreatmentInd = $._decode_implicit<ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd>(() => _decode_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceInteractionIndicatorsTwo,
        _extension_additions_list_spec_for_ServiceInteractionIndicatorsTwo,
        _root_component_type_list_2_spec_for_ServiceInteractionIndicatorsTwo,
        undefined,
    );
    return new ServiceInteractionIndicatorsTwo(
        forwardServiceInteractionInd,
        backwardServiceInteractionInd,
        bothwayThroughConnectionInd,
        suspendTimer,
        connectedNumberTreatmentInd,
        suppressCallDiversionNotification,
        suppressCallTransferNotification,
        allowCdINNoPresentationInd,
        userDialogueDurationInd,
        overrideLineRestrictions,
        suppressVPNAPP,
        calledINNumberOverriding,
        redirectServiceTreatmentInd
    );
}; }
    return _cached_decoder_for_ServiceInteractionIndicatorsTwo(el);
}

let _cached_encoder_for_ServiceInteractionIndicatorsTwo: $.ASN1Encoder<ServiceInteractionIndicatorsTwo> | null = null;

/**
 * @summary Encodes a(n) ServiceInteractionIndicatorsTwo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceInteractionIndicatorsTwo, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceInteractionIndicatorsTwo (value: ServiceInteractionIndicatorsTwo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceInteractionIndicatorsTwo) { _cached_encoder_for_ServiceInteractionIndicatorsTwo = function (value: ServiceInteractionIndicatorsTwo, elGetter: $.ASN1Encoder<ServiceInteractionIndicatorsTwo>): _Element {
    const _components: _Element[] = [];
    if (value.forwardServiceInteractionInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ForwardServiceInteractionInd, $.BER)(value.forwardServiceInteractionInd, $.BER));
    }
    if (value.backwardServiceInteractionInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_BackwardServiceInteractionInd, $.BER)(value.backwardServiceInteractionInd, $.BER));
    }
    if (value.bothwayThroughConnectionInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_BothwayThroughConnectionInd, $.BER)(value.bothwayThroughConnectionInd, $.BER));
    }
    if (value.suspendTimer !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SuspendTimer, $.BER)(value.suspendTimer, $.BER));
    }
    if (value.connectedNumberTreatmentInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ConnectedNumberTreatmentInd, $.BER)(value.connectedNumberTreatmentInd, $.BER));
    }
    if (value.suppressCallDiversionNotification !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.suppressCallDiversionNotification, $.BER));
    }
    if (value.suppressCallTransferNotification !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.suppressCallTransferNotification, $.BER));
    }
    if (value.allowCdINNoPresentationInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.allowCdINNoPresentationInd, $.BER));
    }
    if (value.userDialogueDurationInd !== undefined && !$.deepEq(value.userDialogueDurationInd, ServiceInteractionIndicatorsTwo._default_value_for_userDialogueDurationInd)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.userDialogueDurationInd, $.BER));
    }
    if (value.overrideLineRestrictions !== undefined && !$.deepEq(value.overrideLineRestrictions, ServiceInteractionIndicatorsTwo._default_value_for_overrideLineRestrictions)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.overrideLineRestrictions, $.BER));
    }
    if (value.suppressVPNAPP !== undefined && !$.deepEq(value.suppressVPNAPP, ServiceInteractionIndicatorsTwo._default_value_for_suppressVPNAPP)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER)(value.suppressVPNAPP, $.BER));
    }
    if (value.calledINNumberOverriding !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.calledINNumberOverriding, $.BER));
    }
    if (value.redirectServiceTreatmentInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd, $.BER)(value.redirectServiceTreatmentInd, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceInteractionIndicatorsTwo(value, elGetter);
}


/* eslint-enable */
