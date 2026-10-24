/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type WtmUserId, _decode_WtmUserId, _encode_WtmUserId } from "../WTM-Location-Registration-Operations-asn1-97/WtmUserId.ta.mjs";
import { BasicService, BasicService_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";

/**
 * @summary LocInfoCheckArg
 * @description
 *
 * Argument of `locInfoCheck` (ECMA-302 §6.3.1, §7.6). Sent by either the
 * Visitor PINX or the Home PINX.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocInfoCheckArg ::= SEQUENCE {
 *     wtmUserId WtmUserId,
 *     basicService BasicService DEFAULT allServices,
 *     visitPINX PartyNumber,
 *     -- The PISN number of the Visitor PINX,
 *     -- always a Complete Number.
 *     argExtension LrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LocInfoCheckArg {
    /**
     * @summary `wtmUserId`.
     * @description
     *
     * WTM user whose location data is checked (§7.6.1.1).
     *
     * @public
     * @readonly
     */
    readonly wtmUserId: WtmUserId;
    /**
     * @summary `basicService`.
     * @description
     *
     * Basic service of the registration. Omission means `allServices` (§6.3.1).
     * The invoker may include the service for which the user is registered
     * (§7.6.1.1).
     *
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `visitPINX`.
     * @description
     *
     * PISN number of the Visitor PINX; always a complete number (§6.3.1,
     * §7.6.1.1). The note after §6.3.1, about a per-user roaming number or one
     * number for every user in the PINX, is stated for `LocUpdArg` only.
     *
     * @public
     * @readonly
     */
    readonly visitPINX: PartyNumber;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific data. `WTMLRExtSet` assigns no extensions (ECMA-302
     * §6.3.1).
     *
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<LrExtension>;

    constructor (
        wtmUserId: WtmUserId,
        basicService: OPTIONAL<BasicService>,
        visitPINX: PartyNumber,
        argExtension?: OPTIONAL<LrExtension>
    ) {
        this.wtmUserId = wtmUserId;
        this.basicService = basicService;
        this.visitPINX = visitPINX;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a LocInfoCheckArg
     * @description
     * 
     * This takes an `object` and converts it to a `LocInfoCheckArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocInfoCheckArg`.
     * @returns {LocInfoCheckArg}
     */
    public static _from_object (_o: { [_K in keyof (LocInfoCheckArg)]: (LocInfoCheckArg)[_K] }): LocInfoCheckArg {
        return new LocInfoCheckArg(_o.wtmUserId, _o.basicService, _o.visitPINX, _o.argExtension);
    }

    /**
     * @summary Getter that returns the default value for `basicService`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_basicService () { return BasicService_allServices; }        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of LocInfoCheckArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocInfoCheckArg: $.ComponentSpec[] = [
    new $.ComponentSpec("wtmUserId", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("visitPINX", false, $.hasAnyTag),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of LocInfoCheckArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocInfoCheckArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocInfoCheckArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocInfoCheckArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocInfoCheckArg: $.ASN1Decoder<LocInfoCheckArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocInfoCheckArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocInfoCheckArg (el: _Element): LocInfoCheckArg {
    if (!_cached_decoder_for_LocInfoCheckArg) { _cached_decoder_for_LocInfoCheckArg = function (el: _Element): LocInfoCheckArg {
    let wtmUserId!: WtmUserId;
    let basicService: OPTIONAL<BasicService> = LocInfoCheckArg._default_value_for_basicService;
    let visitPINX!: PartyNumber;
    let argExtension: OPTIONAL<LrExtension>;
    const callbacks: $.DecodingMap = {
        "wtmUserId": (_el: _Element): void => { wtmUserId = _decode_WtmUserId(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "visitPINX": (_el: _Element): void => { visitPINX = _decode_PartyNumber(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_LrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocInfoCheckArg,
        _extension_additions_list_spec_for_LocInfoCheckArg,
        _root_component_type_list_2_spec_for_LocInfoCheckArg,
        undefined,
    );
    return new LocInfoCheckArg(
        wtmUserId,
        basicService,
        visitPINX,
        argExtension
    );
}; }
    return _cached_decoder_for_LocInfoCheckArg(el);
}

let _cached_encoder_for_LocInfoCheckArg: $.ASN1Encoder<LocInfoCheckArg> | null = null;

/**
 * @summary Encodes a(n) LocInfoCheckArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocInfoCheckArg, encoded as an ASN.1 Element.
 */
export
function _encode_LocInfoCheckArg (value: LocInfoCheckArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocInfoCheckArg) { _cached_encoder_for_LocInfoCheckArg = function (value: LocInfoCheckArg, _elGetter: $.ASN1Encoder<LocInfoCheckArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtmUserId(value.wtmUserId, $.BER));
    if (value.basicService !== undefined && !$.deepEq(value.basicService, LocInfoCheckArg._default_value_for_basicService)) {
        _components.push(/* IF_DEFAULT */ _encode_BasicService(value.basicService, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.visitPINX, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_LrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocInfoCheckArg(value, elGetter);
}

/* eslint-enable */
