/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WtmUserId, _decode_WtmUserId, _encode_WtmUserId } from "../WTM-Location-Registration-Operations-asn1-97/WtmUserId.ta.mjs";
import { BasicService, BasicService_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";

/**
 * @summary GetRRCInfArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetRRCInfArg ::= SEQUENCE {
 *     wtmUserId WtmUserId,
 *     basicService BasicService DEFAULT allServices,
 *     argExtension LrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GetRRCInfArg {
    /**
     * @summary `wtmUserId`.
     * @public
     * @readonly
     */
    readonly wtmUserId: WtmUserId;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `argExtension`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<LrExtension>;

    constructor (
        wtmUserId: WtmUserId,
        basicService: OPTIONAL<BasicService>,
        argExtension: OPTIONAL<LrExtension>
    ) {
        this.wtmUserId = wtmUserId;
        this.basicService = basicService;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a GetRRCInfArg
     * @description
     * 
     * This takes an `object` and converts it to a `GetRRCInfArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetRRCInfArg`.
     * @returns {GetRRCInfArg}
     */
    public static _from_object (_o: { [_K in keyof (GetRRCInfArg)]: (GetRRCInfArg)[_K] }): GetRRCInfArg {
        return new GetRRCInfArg(_o.wtmUserId, _o.basicService, _o.argExtension);
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
 * @summary The Leading Root Component Types of GetRRCInfArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetRRCInfArg: $.ComponentSpec[] = [
    new $.ComponentSpec("wtmUserId", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of GetRRCInfArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetRRCInfArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetRRCInfArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetRRCInfArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetRRCInfArg: $.ASN1Decoder<GetRRCInfArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetRRCInfArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetRRCInfArg (el: _Element): GetRRCInfArg {
    if (!_cached_decoder_for_GetRRCInfArg) { _cached_decoder_for_GetRRCInfArg = function (el: _Element): GetRRCInfArg {
    let wtmUserId!: WtmUserId;
    let basicService: OPTIONAL<BasicService> = GetRRCInfArg._default_value_for_basicService;
    let argExtension: OPTIONAL<LrExtension>;
    const callbacks: $.DecodingMap = {
        "wtmUserId": (_el: _Element): void => { wtmUserId = _decode_WtmUserId(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_LrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetRRCInfArg,
        _extension_additions_list_spec_for_GetRRCInfArg,
        _root_component_type_list_2_spec_for_GetRRCInfArg,
        undefined,
    );
    return new GetRRCInfArg(
        wtmUserId,
        basicService,
        argExtension
    );
}; }
    return _cached_decoder_for_GetRRCInfArg(el);
}

let _cached_encoder_for_GetRRCInfArg: $.ASN1Encoder<GetRRCInfArg> | null = null;

/**
 * @summary Encodes a(n) GetRRCInfArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetRRCInfArg, encoded as an ASN.1 Element.
 */
export
function _encode_GetRRCInfArg (value: GetRRCInfArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetRRCInfArg) { _cached_encoder_for_GetRRCInfArg = function (value: GetRRCInfArg, elGetter: $.ASN1Encoder<GetRRCInfArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtmUserId(value.wtmUserId, $.BER));
    if (value.basicService !== undefined && !$.deepEq(value.basicService, GetRRCInfArg._default_value_for_basicService)) {
        _components.push(/* IF_DEFAULT */ _encode_BasicService(value.basicService, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_LrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GetRRCInfArg(value, elGetter);
}

/* eslint-enable */
