/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PumDelRegArg_pumUserId, _decode_PumDelRegArg_pumUserId, _encode_PumDelRegArg_pumUserId } from "../PUM-Registration-Operations-asn1-97/PumDelRegArg-pumUserId.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ServiceOption, _decode_ServiceOption, _encode_ServiceOption, _enum_for_ServiceOption } from "../PUM-Registration-Operations-asn1-97/ServiceOption.ta.mjs";
import { PumrExtension, _decode_PumrExtension, _encode_PumrExtension } from "../PUM-Registration-Operations-asn1-97/PumrExtension.ta.mjs";

/**
 * @summary PumDelRegArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumDelRegArg ::= SEQUENCE {
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
 *     serviceOption ServiceOption,
 *     -- Type of registration session (InCall, OutCall or AllCall)
 *     argExtension PumrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PumDelRegArg {
    /**
     * @summary `pumUserId`.
     * @public
     * @readonly
     */
    readonly pumUserId: PumDelRegArg_pumUserId;
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
     * @summary `serviceOption`.
     * @public
     * @readonly
     */
    readonly serviceOption: ServiceOption;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumrExtension>;

    constructor (
        pumUserId: PumDelRegArg_pumUserId,
        basicService: BasicService,
        hostingAddr: PartyNumber,
        serviceOption: ServiceOption,
        argExtension: OPTIONAL<PumrExtension>
    ) {
        this.pumUserId = pumUserId;
        this.basicService = basicService;
        this.hostingAddr = hostingAddr;
        this.serviceOption = serviceOption;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a PumDelRegArg
     * @description
     * 
     * This takes an `object` and converts it to a `PumDelRegArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PumDelRegArg`.
     * @returns {PumDelRegArg}
     */
    public static _from_object (_o: { [_K in keyof (PumDelRegArg)]: (PumDelRegArg)[_K] }): PumDelRegArg {
        return new PumDelRegArg(_o.pumUserId, _o.basicService, _o.hostingAddr, _o.serviceOption, _o.argExtension);
    }

        /**
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
 * @summary The Leading Root Component Types of PumDelRegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PumDelRegArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pumUserId", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("hostingAddr", false, $.hasAnyTag),
    new $.ComponentSpec("serviceOption", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of PumDelRegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PumDelRegArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PumDelRegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PumDelRegArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PumDelRegArg: $.ASN1Decoder<PumDelRegArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumDelRegArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumDelRegArg (el: _Element): PumDelRegArg {
    if (!_cached_decoder_for_PumDelRegArg) { _cached_decoder_for_PumDelRegArg = function (el: _Element): PumDelRegArg {
    let pumUserId!: PumDelRegArg_pumUserId;
    let basicService!: BasicService;
    let hostingAddr!: PartyNumber;
    let serviceOption!: ServiceOption;
    let argExtension: OPTIONAL<PumrExtension>;
    const callbacks: $.DecodingMap = {
        "pumUserId": (_el: _Element): void => { pumUserId = _decode_PumDelRegArg_pumUserId(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "hostingAddr": (_el: _Element): void => { hostingAddr = _decode_PartyNumber(_el); },
        "serviceOption": (_el: _Element): void => { serviceOption = _decode_ServiceOption(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PumDelRegArg,
        _extension_additions_list_spec_for_PumDelRegArg,
        _root_component_type_list_2_spec_for_PumDelRegArg,
        undefined,
    );
    return new PumDelRegArg(
        pumUserId,
        basicService,
        hostingAddr,
        serviceOption,
        argExtension
    );
}; }
    return _cached_decoder_for_PumDelRegArg(el);
}

let _cached_encoder_for_PumDelRegArg: $.ASN1Encoder<PumDelRegArg> | null = null;

/**
 * @summary Encodes a(n) PumDelRegArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumDelRegArg, encoded as an ASN.1 Element.
 */
export
function _encode_PumDelRegArg (value: PumDelRegArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumDelRegArg) { _cached_encoder_for_PumDelRegArg = function (value: PumDelRegArg, _elGetter: $.ASN1Encoder<PumDelRegArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PumDelRegArg_pumUserId(value.pumUserId, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.hostingAddr, $.BER));
    _components.push(/* REQUIRED   */ _encode_ServiceOption(value.serviceOption, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PumDelRegArg(value, elGetter);
}

/* eslint-enable */
