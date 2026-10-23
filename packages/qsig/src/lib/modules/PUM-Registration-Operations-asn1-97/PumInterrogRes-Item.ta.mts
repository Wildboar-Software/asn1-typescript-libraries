/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ServiceOption, _decode_ServiceOption, _encode_ServiceOption, _enum_for_ServiceOption } from "../PUM-Registration-Operations-asn1-97/ServiceOption.ta.mjs";
import { SessionParams, _decode_SessionParams, _encode_SessionParams } from "../PUM-Registration-Operations-asn1-97/SessionParams.ta.mjs";
import { PumrExtension, _decode_PumrExtension, _encode_PumrExtension } from "../PUM-Registration-Operations-asn1-97/PumrExtension.ta.mjs";

/**
 * @summary PumInterrogRes_Item
 * @description
 *
 * One registration session in a `pumInterrog` result (ECMA-282 §6.3.1,
 * §6.7.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumInterrogRes-Item ::= SEQUENCE {
 *     basicService [0] IMPLICIT BasicService OPTIONAL,
 *     -- specific basic service or all basic services,
 *     -- (Home PINX information)
 *     hostingAddr [1] PartyNumber OPTIONAL,
 *     -- The PISN number of the hosting user,
 *     -- always a Complete Number.
 *     -- (Home PINX information)
 *     serviceOption [2] IMPLICIT ServiceOption OPTIONAL,
 *     -- Type of registration session
 *     -- (InCall, OutCall or AllCall)
 *     -- (Home PINX information)
 *     interrogParams SessionParams OPTIONAL,
 *     -- Time left in registration session,
 *     -- Number of outgoing calls left
 *     -- (Visitor PINX information)
 *     argExtension PumrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PumInterrogRes_Item {
    /**
     * @summary `basicService`.
     * @description
     *
     * Basic service of this session, or all basic services. Home PINX
     * information (§6.3.1).
     *
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `hostingAddr`.
     * @description
     *
     * PISN number of the hosting user; always a complete number. Home PINX
     * information (§6.3.1).
     *
     * @public
     * @readonly
     */
    readonly hostingAddr: OPTIONAL<PartyNumber>;
    /**
     * @summary `serviceOption`.
     * @description
     *
     * InCall, OutCall, or AllCall. Home PINX information (§6.3.1).
     *
     * @public
     * @readonly
     */
    readonly serviceOption: OPTIONAL<ServiceOption>;
    /**
     * @summary `interrogParams`.
     * @description
     *
     * Time left in the session and outgoing calls left. Visitor PINX
     * information (§6.3.1, §6.7.1.1).
     *
     * @public
     * @readonly
     */
    readonly interrogParams: OPTIONAL<SessionParams>;
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
        basicService?: OPTIONAL<BasicService>,
        hostingAddr?: OPTIONAL<PartyNumber>,
        serviceOption?: OPTIONAL<ServiceOption>,
        interrogParams?: OPTIONAL<SessionParams>,
        argExtension?: OPTIONAL<PumrExtension>
    ) {
        this.basicService = basicService;
        this.hostingAddr = hostingAddr;
        this.serviceOption = serviceOption;
        this.interrogParams = interrogParams;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a PumInterrogRes_Item
     * @description
     * 
     * This takes an `object` and converts it to a `PumInterrogRes_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PumInterrogRes_Item`.
     * @returns {PumInterrogRes_Item}
     */
    public static _from_object (_o: { [_K in keyof (PumInterrogRes_Item)]: (PumInterrogRes_Item)[_K] }): PumInterrogRes_Item {
        return new PumInterrogRes_Item(_o.basicService, _o.hostingAddr, _o.serviceOption, _o.interrogParams, _o.argExtension);
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
 * @summary The Leading Root Component Types of PumInterrogRes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PumInterrogRes_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("hostingAddr", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceOption", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("interrogParams", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of PumInterrogRes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PumInterrogRes_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PumInterrogRes_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PumInterrogRes_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PumInterrogRes_Item: $.ASN1Decoder<PumInterrogRes_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumInterrogRes_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumInterrogRes_Item (el: _Element): PumInterrogRes_Item {
    if (!_cached_decoder_for_PumInterrogRes_Item) { _cached_decoder_for_PumInterrogRes_Item = function (el: _Element): PumInterrogRes_Item {
    let basicService: OPTIONAL<BasicService>;
    let hostingAddr: OPTIONAL<PartyNumber>;
    let serviceOption: OPTIONAL<ServiceOption>;
    let interrogParams: OPTIONAL<SessionParams>;
    let argExtension: OPTIONAL<PumrExtension>;
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = $._decode_implicit<BasicService>(() => _decode_BasicService)(_el); },
        "hostingAddr": (_el: _Element): void => { hostingAddr = $._decode_explicit<PartyNumber>(() => _decode_PartyNumber)(_el); },
        "serviceOption": (_el: _Element): void => { serviceOption = $._decode_implicit<ServiceOption>(() => _decode_ServiceOption)(_el); },
        "interrogParams": (_el: _Element): void => { interrogParams = _decode_SessionParams(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PumInterrogRes_Item,
        _extension_additions_list_spec_for_PumInterrogRes_Item,
        _root_component_type_list_2_spec_for_PumInterrogRes_Item,
        undefined,
    );
    return new PumInterrogRes_Item(
        basicService,
        hostingAddr,
        serviceOption,
        interrogParams,
        argExtension
    );
}; }
    return _cached_decoder_for_PumInterrogRes_Item(el);
}

let _cached_encoder_for_PumInterrogRes_Item: $.ASN1Encoder<PumInterrogRes_Item> | null = null;

/**
 * @summary Encodes a(n) PumInterrogRes_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumInterrogRes_Item, encoded as an ASN.1 Element.
 */
export
function _encode_PumInterrogRes_Item (value: PumInterrogRes_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumInterrogRes_Item) { _cached_encoder_for_PumInterrogRes_Item = function (value: PumInterrogRes_Item, _elGetter: $.ASN1Encoder<PumInterrogRes_Item>): _Element {
    const _components: _Element[] = [];
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.hostingAddr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PartyNumber, $.BER)(value.hostingAddr, $.BER));
    }
    if (value.serviceOption !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceOption, $.BER)(value.serviceOption, $.BER));
    }
    if (value.interrogParams !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SessionParams(value.interrogParams, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PumInterrogRes_Item(value, elGetter);
}

/* eslint-enable */
