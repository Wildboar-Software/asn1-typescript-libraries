/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PumRegistrArg_pumUserId, _decode_PumRegistrArg_pumUserId, _encode_PumRegistrArg_pumUserId } from "../PUM-Registration-Operations-asn1-97/PumRegistrArg-pumUserId.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ServiceOption, ServiceOption_inCallRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ServiceOption, _encode_ServiceOption, _enum_for_ServiceOption } from "../PUM-Registration-Operations-asn1-97/ServiceOption.ta.mjs";
import { SessionParams, _decode_SessionParams, _encode_SessionParams } from "../PUM-Registration-Operations-asn1-97/SessionParams.ta.mjs";
import { PumRegistrArg_userPin, _decode_PumRegistrArg_userPin, _encode_PumRegistrArg_userPin } from "../PUM-Registration-Operations-asn1-97/PumRegistrArg-userPin.ta.mjs";
import { PumrExtension, _decode_PumrExtension, _encode_PumrExtension } from "../PUM-Registration-Operations-asn1-97/PumrExtension.ta.mjs";

/**
 * @summary PumRegistrArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumRegistrArg ::= SEQUENCE {
 *     pumUserId CHOICE {
 *         pumNumber PartyNumber,
 *         -- The PISN number of the PUM user,
 *         -- always a Complete Number.
 *         alternativeId AlternativeId
 *     },
 *     basicService BasicService,
 *     -- specific basic service or all basic services,
 *     hostingAddr PartyNumber,
 *     -- The PISN number of the hosting user,
 *     -- always a Complete Number.
 *     activatingUserAddr [0] PartyNumber OPTIONAL,
 *     -- The PISN number of the activating user,
 *     -- always a Complete Number.
 *     -- Mandatory if sent from a Remote PINX, else not included.
 *     serviceOption ServiceOption DEFAULT inCallRegistration,
 *     -- Type of registration (InCall, OutCall or AllCall)
 *     sessionParams SessionParams OPTIONAL,
 *     -- Duration of session, Number of outgoing calls
 *     userPin CHOICE {
 *         pumUserPin [6] IMPLICIT UserPin,
 *         activatingUserPin [7] IMPLICIT UserPin
 *     } OPTIONAL,
 *     argExtension PumrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PumRegistrArg {
    /**
     * @summary `pumUserId`.
     * @public
     * @readonly
     */
    readonly pumUserId: PumRegistrArg_pumUserId;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `hostingAddr`.
     * @public
     * @readonly
     */
    readonly hostingAddr: PartyNumber;
    /**
     * @summary `activatingUserAddr`.
     * @public
     * @readonly
     */
    readonly activatingUserAddr: OPTIONAL<PartyNumber>;
    /**
     * @summary `serviceOption`.
     * @public
     * @readonly
     */
    readonly serviceOption: OPTIONAL<ServiceOption>;
    /**
     * @summary `sessionParams`.
     * @public
     * @readonly
     */
    readonly sessionParams: OPTIONAL<SessionParams>;
    /**
     * @summary `userPin`.
     * @public
     * @readonly
     */
    readonly userPin: OPTIONAL<PumRegistrArg_userPin>;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumrExtension>;

    constructor (
        pumUserId: PumRegistrArg_pumUserId,
        basicService: BasicService,
        hostingAddr: PartyNumber,
        activatingUserAddr: OPTIONAL<PartyNumber>,
        serviceOption: OPTIONAL<ServiceOption>,
        sessionParams: OPTIONAL<SessionParams>,
        userPin: OPTIONAL<PumRegistrArg_userPin>,
        argExtension: OPTIONAL<PumrExtension>
    ) {
        this.pumUserId = pumUserId;
        this.basicService = basicService;
        this.hostingAddr = hostingAddr;
        this.activatingUserAddr = activatingUserAddr;
        this.serviceOption = serviceOption;
        this.sessionParams = sessionParams;
        this.userPin = userPin;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a PumRegistrArg
     * @description
     * 
     * This takes an `object` and converts it to a `PumRegistrArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PumRegistrArg`.
     * @returns {PumRegistrArg}
     */
    public static _from_object (_o: { [_K in keyof (PumRegistrArg)]: (PumRegistrArg)[_K] }): PumRegistrArg {
        return new PumRegistrArg(_o.pumUserId, _o.basicService, _o.hostingAddr, _o.activatingUserAddr, _o.serviceOption, _o.sessionParams, _o.userPin, _o.argExtension);
    }

    /**
     * @summary Getter that returns the default value for `serviceOption`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_serviceOption () { return ServiceOption_inCallRegistration; }        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;        /**
         * @summary The enum used as the type of the component `serviceOption`
         * @public
         * @static
         */

    public static _enum_for_serviceOption = _enum_for_ServiceOption;
}

/**
 * @summary The Leading Root Component Types of PumRegistrArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PumRegistrArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pumUserId", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("hostingAddr", false, $.hasAnyTag),
    new $.ComponentSpec("activatingUserAddr", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceOption", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("sessionParams", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("userPin", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7))),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of PumRegistrArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PumRegistrArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PumRegistrArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PumRegistrArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PumRegistrArg: $.ASN1Decoder<PumRegistrArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumRegistrArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumRegistrArg (el: _Element): PumRegistrArg {
    if (!_cached_decoder_for_PumRegistrArg) { _cached_decoder_for_PumRegistrArg = function (el: _Element): PumRegistrArg {
    let pumUserId!: PumRegistrArg_pumUserId;
    let basicService!: BasicService;
    let hostingAddr!: PartyNumber;
    let activatingUserAddr: OPTIONAL<PartyNumber>;
    let serviceOption: OPTIONAL<ServiceOption> = PumRegistrArg._default_value_for_serviceOption;
    let sessionParams: OPTIONAL<SessionParams>;
    let userPin: OPTIONAL<PumRegistrArg_userPin>;
    let argExtension: OPTIONAL<PumrExtension>;
    const callbacks: $.DecodingMap = {
        "pumUserId": (_el: _Element): void => { pumUserId = _decode_PumRegistrArg_pumUserId(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "hostingAddr": (_el: _Element): void => { hostingAddr = _decode_PartyNumber(_el); },
        "activatingUserAddr": (_el: _Element): void => { activatingUserAddr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "serviceOption": (_el: _Element): void => { serviceOption = _decode_ServiceOption(_el); },
        "sessionParams": (_el: _Element): void => { sessionParams = _decode_SessionParams(_el); },
        "userPin": (_el: _Element): void => { userPin = _decode_PumRegistrArg_userPin(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PumRegistrArg,
        _extension_additions_list_spec_for_PumRegistrArg,
        _root_component_type_list_2_spec_for_PumRegistrArg,
        undefined,
    );
    return new PumRegistrArg(
        pumUserId,
        basicService,
        hostingAddr,
        activatingUserAddr,
        serviceOption,
        sessionParams,
        userPin,
        argExtension
    );
}; }
    return _cached_decoder_for_PumRegistrArg(el);
}

let _cached_encoder_for_PumRegistrArg: $.ASN1Encoder<PumRegistrArg> | null = null;

/**
 * @summary Encodes a(n) PumRegistrArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumRegistrArg, encoded as an ASN.1 Element.
 */
export
function _encode_PumRegistrArg (value: PumRegistrArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumRegistrArg) { _cached_encoder_for_PumRegistrArg = function (value: PumRegistrArg, elGetter: $.ASN1Encoder<PumRegistrArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PumRegistrArg_pumUserId(value.pumUserId, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.hostingAddr, $.BER));
    if (value.activatingUserAddr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_PartyNumber, $.BER)(value.activatingUserAddr, $.BER));
    }
    if (value.serviceOption !== undefined && !$.deepEq(value.serviceOption, PumRegistrArg._default_value_for_serviceOption)) {
        _components.push(/* IF_DEFAULT */ _encode_ServiceOption(value.serviceOption, $.BER));
    }
    if (value.sessionParams !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SessionParams(value.sessionParams, $.BER));
    }
    if (value.userPin !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumRegistrArg_userPin(value.userPin, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PumRegistrArg(value, elGetter);
}

/* eslint-enable */
