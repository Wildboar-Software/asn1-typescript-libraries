/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PumInterrogArg_pumUserId, _decode_PumInterrogArg_pumUserId, _encode_PumInterrogArg_pumUserId } from "../PUM-Registration-Operations-asn1-97/PumInterrogArg-pumUserId.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ServiceOption, _decode_ServiceOption, _encode_ServiceOption, _enum_for_ServiceOption } from "../PUM-Registration-Operations-asn1-97/ServiceOption.ta.mjs";
import { PumInterrogArg_userPin, _decode_PumInterrogArg_userPin, _encode_PumInterrogArg_userPin } from "../PUM-Registration-Operations-asn1-97/PumInterrogArg-userPin.ta.mjs";
import { PumrExtension, _decode_PumrExtension, _encode_PumrExtension } from "../PUM-Registration-Operations-asn1-97/PumrExtension.ta.mjs";

/**
 * @summary PumInterrogArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumInterrogArg ::= SEQUENCE {
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
 *     -- Omission indicates 'all hosting addresses'.
 *     activatingUserAddr [1] PartyNumber OPTIONAL,
 *     -- The PISN number of the activating user,
 *     -- always a Complete Number.
 *     serviceOption [2] ServiceOption OPTIONAL,
 *     homeInfoOnly BOOLEAN DEFAULT TRUE,
 *     -- True = Only Home PINX information (default)
 *     -- False = Complete information
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
class PumInterrogArg {
    /**
     * @summary `pumUserId`.
     * @public
     * @readonly
     */
    readonly pumUserId: PumInterrogArg_pumUserId;
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
    readonly hostingAddr: OPTIONAL<PartyNumber>;
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
     * @summary `homeInfoOnly`.
     * @public
     * @readonly
     */
    readonly homeInfoOnly: OPTIONAL<BOOLEAN>;
    /**
     * @summary `userPin`.
     * @public
     * @readonly
     */
    readonly userPin: OPTIONAL<PumInterrogArg_userPin>;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumrExtension>;

    constructor (
        pumUserId: PumInterrogArg_pumUserId,
        basicService: BasicService,
        hostingAddr: OPTIONAL<PartyNumber>,
        activatingUserAddr: OPTIONAL<PartyNumber>,
        serviceOption: OPTIONAL<ServiceOption>,
        homeInfoOnly: OPTIONAL<BOOLEAN>,
        userPin: OPTIONAL<PumInterrogArg_userPin>,
        argExtension: OPTIONAL<PumrExtension>
    ) {
        this.pumUserId = pumUserId;
        this.basicService = basicService;
        this.hostingAddr = hostingAddr;
        this.activatingUserAddr = activatingUserAddr;
        this.serviceOption = serviceOption;
        this.homeInfoOnly = homeInfoOnly;
        this.userPin = userPin;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a PumInterrogArg
     * @description
     * 
     * This takes an `object` and converts it to a `PumInterrogArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PumInterrogArg`.
     * @returns {PumInterrogArg}
     */
    public static _from_object (_o: { [_K in keyof (PumInterrogArg)]: (PumInterrogArg)[_K] }): PumInterrogArg {
        return new PumInterrogArg(_o.pumUserId, _o.basicService, _o.hostingAddr, _o.activatingUserAddr, _o.serviceOption, _o.homeInfoOnly, _o.userPin, _o.argExtension);
    }

    /**
     * @summary Getter that returns the default value for `homeInfoOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_homeInfoOnly () { return true; }        /**
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
 * @summary The Leading Root Component Types of PumInterrogArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PumInterrogArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pumUserId", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("hostingAddr", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("activatingUserAddr", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceOption", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("homeInfoOnly", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("userPin", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7))),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of PumInterrogArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PumInterrogArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PumInterrogArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PumInterrogArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PumInterrogArg: $.ASN1Decoder<PumInterrogArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumInterrogArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumInterrogArg (el: _Element): PumInterrogArg {
    if (!_cached_decoder_for_PumInterrogArg) { _cached_decoder_for_PumInterrogArg = function (el: _Element): PumInterrogArg {
    let pumUserId!: PumInterrogArg_pumUserId;
    let basicService!: BasicService;
    let hostingAddr: OPTIONAL<PartyNumber>;
    let activatingUserAddr: OPTIONAL<PartyNumber>;
    let serviceOption: OPTIONAL<ServiceOption>;
    let homeInfoOnly: OPTIONAL<BOOLEAN> = PumInterrogArg._default_value_for_homeInfoOnly;
    let userPin: OPTIONAL<PumInterrogArg_userPin>;
    let argExtension: OPTIONAL<PumrExtension>;
    const callbacks: $.DecodingMap = {
        "pumUserId": (_el: _Element): void => { pumUserId = _decode_PumInterrogArg_pumUserId(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "hostingAddr": (_el: _Element): void => { hostingAddr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "activatingUserAddr": (_el: _Element): void => { activatingUserAddr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "serviceOption": (_el: _Element): void => { serviceOption = $._decode_explicit<ServiceOption>(() => _decode_ServiceOption)(_el); },
        "homeInfoOnly": (_el: _Element): void => { homeInfoOnly = $._decodeBoolean(_el); },
        "userPin": (_el: _Element): void => { userPin = _decode_PumInterrogArg_userPin(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PumInterrogArg,
        _extension_additions_list_spec_for_PumInterrogArg,
        _root_component_type_list_2_spec_for_PumInterrogArg,
        undefined,
    );
    return new PumInterrogArg(
        pumUserId,
        basicService,
        hostingAddr,
        activatingUserAddr,
        serviceOption,
        homeInfoOnly,
        userPin,
        argExtension
    );
}; }
    return _cached_decoder_for_PumInterrogArg(el);
}

let _cached_encoder_for_PumInterrogArg: $.ASN1Encoder<PumInterrogArg> | null = null;

/**
 * @summary Encodes a(n) PumInterrogArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumInterrogArg, encoded as an ASN.1 Element.
 */
export
function _encode_PumInterrogArg (value: PumInterrogArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumInterrogArg) { _cached_encoder_for_PumInterrogArg = function (value: PumInterrogArg, elGetter: $.ASN1Encoder<PumInterrogArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PumInterrogArg_pumUserId(value.pumUserId, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    if (value.hostingAddr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_PartyNumber, $.BER)(value.hostingAddr, $.BER));
    }
    if (value.activatingUserAddr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PartyNumber, $.BER)(value.activatingUserAddr, $.BER));
    }
    if (value.serviceOption !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_ServiceOption, $.BER)(value.serviceOption, $.BER));
    }
    if (value.homeInfoOnly !== undefined && !$.deepEq(value.homeInfoOnly, PumInterrogArg._default_value_for_homeInfoOnly)) {
        _components.push(/* IF_DEFAULT */ $._encodeBoolean(value.homeInfoOnly, $.BER));
    }
    if (value.userPin !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumInterrogArg_userPin(value.userPin, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PumInterrogArg(value, elGetter);
}

/* eslint-enable */
