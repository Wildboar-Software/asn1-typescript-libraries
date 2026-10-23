/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PumDe_regArg_pumUserId, _decode_PumDe_regArg_pumUserId, _encode_PumDe_regArg_pumUserId } from "../PUM-Registration-Operations-asn1-97/PumDe-regArg-pumUserId.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ServiceOption, ServiceOption_inCallRegistration /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ServiceOption, _encode_ServiceOption, _enum_for_ServiceOption } from "../PUM-Registration-Operations-asn1-97/ServiceOption.ta.mjs";
import { PumDe_regArg_userPin, _decode_PumDe_regArg_userPin, _encode_PumDe_regArg_userPin } from "../PUM-Registration-Operations-asn1-97/PumDe-regArg-userPin.ta.mjs";
import { PumrExtension, _decode_PumrExtension, _encode_PumrExtension } from "../PUM-Registration-Operations-asn1-97/PumrExtension.ta.mjs";

/**
 * @summary PumDe_regArg
 * @description
 *
 * Argument of `pumDe-reg` (ECMA-282 §6.3.1, §6.6). Identifies the user and
 * which sessions to clear.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumDe-regArg ::= SEQUENCE {
 *     pumUserId CHOICE {
 *         pumNumber PartyNumber,
 *         -- The PISN number of the PUM user,
 *         -- always a Complete Number.
 *         alternativeId AlternativeId
 *     },
 *     basicService BasicService,
 *     -- specific basic service or all basic services,
 *     hostingAddr [0] PartyNumber OPTIONAL,
 *     -- The PISN number of the hosting user,
 *     -- always a Complete Number.
 *     -- Not included if serviceOption indicates 'inCallRegistration',
 *     -- optional if serviceOption indicates 'outCallRegistration'
 *     -- or 'allCallRegistration'.
 *     activatingUserAddr [1] PartyNumber OPTIONAL,
 *     -- The PISN number of the activating user,
 *     -- always a Complete Number.
 *     -- Mandatory if sent from a Remote PINX, else not included.
 *     serviceOption ServiceOption DEFAULT inCallRegistration,
 *     -- Type of registration session (InCall, OutCall or AllCall)
 *     -- If serviceOption indicates 'outCallRegistration' and
 *     -- hostingAddr is omitted, the de-registration applies to
 *     -- all OutCall registrations of this PUM user.
 *     -- If serviceOption indicates 'allCallRegistration' and
 *     -- hostingAddr is omitted, the de-registration applies to the
 *     -- AllCall and all OutCall registrations of this PUM user.
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
class PumDe_regArg {
    /**
     * @summary `pumUserId`.
     * @description
     *
     * PISN number, always a complete number, or an alternative identifier of
     * the PUM user (§6.3.1, §6.6.1.1).
     *
     * @public
     * @readonly
     */
    readonly pumUserId: PumDe_regArg_pumUserId;
    /**
     * @summary `basicService`.
     * @description
     *
     * Basic service to de-register, or all basic services (§6.3.1, §6.6.1.1).
     *
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `hostingAddr`.
     * @description
     *
     * PISN number of the hosting user; always a complete number. Omitted for
     * InCall. Optional for OutCall and AllCall (§6.3.1). If omitted with
     * OutCall, every OutCall session of this user is cleared. If omitted with
     * AllCall, the AllCall session and every OutCall session are cleared. A
     * present value limits de-registration to that hosting address (§6.6.2.1).
     *
     * @public
     * @readonly
     */
    readonly hostingAddr: OPTIONAL<PartyNumber>;
    /**
     * @summary `activatingUserAddr`.
     * @description
     *
     * PISN number of the activating user; always a complete number. Required
     * when a Remote PINX sends the invoke, and omitted otherwise (§6.3.1,
     * §6.6.4.1). The Home PINX checks it when it is present (§6.6.2.1).
     *
     * @public
     * @readonly
     */
    readonly activatingUserAddr: OPTIONAL<PartyNumber>;
    /**
     * @summary `serviceOption`.
     * @description
     *
     * InCall, OutCall, or AllCall session to clear (§6.3.1). Omission means
     * InCall (§6.6.2.1).
     *
     * @public
     * @readonly
     */
    readonly serviceOption: OPTIONAL<ServiceOption>;
    /**
     * @summary `userPin`.
     * @description
     *
     * PIN supplied with the de-registration request. The activating user's PIN
     * is sent on a remote request (§6.6.1.1, §6.6.4.1). Omitted when no PIN was
     * supplied.
     *
     * @public
     * @readonly
     */
    readonly userPin: OPTIONAL<PumDe_regArg_userPin>;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific data. `PUMRExtSet` assigns no extensions (ECMA-282
     * §6.3.1).
     *
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumrExtension>;

    constructor (
        pumUserId: PumDe_regArg_pumUserId,
        basicService: BasicService,
        hostingAddr: OPTIONAL<PartyNumber>,
        activatingUserAddr: OPTIONAL<PartyNumber>,
        serviceOption: OPTIONAL<ServiceOption>,
        userPin: OPTIONAL<PumDe_regArg_userPin>,
        argExtension: OPTIONAL<PumrExtension>
    ) {
        this.pumUserId = pumUserId;
        this.basicService = basicService;
        this.hostingAddr = hostingAddr;
        this.activatingUserAddr = activatingUserAddr;
        this.serviceOption = serviceOption;
        this.userPin = userPin;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a PumDe_regArg
     * @description
     * 
     * This takes an `object` and converts it to a `PumDe_regArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PumDe_regArg`.
     * @returns {PumDe_regArg}
     */
    public static _from_object (_o: { [_K in keyof (PumDe_regArg)]: (PumDe_regArg)[_K] }): PumDe_regArg {
        return new PumDe_regArg(_o.pumUserId, _o.basicService, _o.hostingAddr, _o.activatingUserAddr, _o.serviceOption, _o.userPin, _o.argExtension);
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
 * @summary The Leading Root Component Types of PumDe_regArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PumDe_regArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pumUserId", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("hostingAddr", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("activatingUserAddr", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceOption", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("userPin", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7))),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of PumDe_regArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PumDe_regArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PumDe_regArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PumDe_regArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PumDe_regArg: $.ASN1Decoder<PumDe_regArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumDe_regArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumDe_regArg (el: _Element): PumDe_regArg {
    if (!_cached_decoder_for_PumDe_regArg) { _cached_decoder_for_PumDe_regArg = function (el: _Element): PumDe_regArg {
    let pumUserId!: PumDe_regArg_pumUserId;
    let basicService!: BasicService;
    let hostingAddr: OPTIONAL<PartyNumber>;
    let activatingUserAddr: OPTIONAL<PartyNumber>;
    let serviceOption: OPTIONAL<ServiceOption> = PumDe_regArg._default_value_for_serviceOption;
    let userPin: OPTIONAL<PumDe_regArg_userPin>;
    let argExtension: OPTIONAL<PumrExtension>;
    const callbacks: $.DecodingMap = {
        "pumUserId": (_el: _Element): void => { pumUserId = _decode_PumDe_regArg_pumUserId(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "hostingAddr": (_el: _Element): void => { hostingAddr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "activatingUserAddr": (_el: _Element): void => { activatingUserAddr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "serviceOption": (_el: _Element): void => { serviceOption = _decode_ServiceOption(_el); },
        "userPin": (_el: _Element): void => { userPin = _decode_PumDe_regArg_userPin(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PumDe_regArg,
        _extension_additions_list_spec_for_PumDe_regArg,
        _root_component_type_list_2_spec_for_PumDe_regArg,
        undefined,
    );
    return new PumDe_regArg(
        pumUserId,
        basicService,
        hostingAddr,
        activatingUserAddr,
        serviceOption,
        userPin,
        argExtension
    );
}; }
    return _cached_decoder_for_PumDe_regArg(el);
}

let _cached_encoder_for_PumDe_regArg: $.ASN1Encoder<PumDe_regArg> | null = null;

/**
 * @summary Encodes a(n) PumDe_regArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumDe_regArg, encoded as an ASN.1 Element.
 */
export
function _encode_PumDe_regArg (value: PumDe_regArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumDe_regArg) { _cached_encoder_for_PumDe_regArg = function (value: PumDe_regArg, _elGetter: $.ASN1Encoder<PumDe_regArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PumDe_regArg_pumUserId(value.pumUserId, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    if (value.hostingAddr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_PartyNumber, $.BER)(value.hostingAddr, $.BER));
    }
    if (value.activatingUserAddr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PartyNumber, $.BER)(value.activatingUserAddr, $.BER));
    }
    if (value.serviceOption !== undefined && !$.deepEq(value.serviceOption, PumDe_regArg._default_value_for_serviceOption)) {
        _components.push(/* IF_DEFAULT */ _encode_ServiceOption(value.serviceOption, $.BER));
    }
    if (value.userPin !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumDe_regArg_userPin(value.userPin, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PumDe_regArg(value, elGetter);
}

/* eslint-enable */
