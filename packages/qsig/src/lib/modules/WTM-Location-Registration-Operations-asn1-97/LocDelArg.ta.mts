/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WtmUserId, _decode_WtmUserId, _encode_WtmUserId } from "../WTM-Location-Registration-Operations-asn1-97/WtmUserId.ta.mjs";
// export { WtmUserId, _decode_WtmUserId, _encode_WtmUserId } from "../WTM-Location-Registration-Operations-asn1-97/WtmUserId.ta.mjs";
import { BasicService, BasicService_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
// export { BasicService, _enum_for_BasicService, BasicService_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, allServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speech /* IMPORTED_LONG_ENUMERATION_ITEM */, speech /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_unrestrictedDigitalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestrictedDigitalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_audio3100Hz /* IMPORTED_LONG_ENUMERATION_ITEM */, audio3100Hz /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telephony /* IMPORTED_LONG_ENUMERATION_ITEM */, telephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_teletex /* IMPORTED_LONG_ENUMERATION_ITEM */, teletex /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telefaxGroup4Class1 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup4Class1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videotexSyntaxBased /* IMPORTED_LONG_ENUMERATION_ITEM */, videotexSyntaxBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videotelephony /* IMPORTED_LONG_ENUMERATION_ITEM */, videotelephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BasicService, _encode_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";
// export { LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";


/**
 * @summary LocDelArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocDelArg ::= SEQUENCE {
 *     wtmUserId WtmUserId,
 *     basicService BasicService DEFAULT allServices,
 *     argExtension LrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class LocDelArg {
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
     * @summary Restructures an object into a LocDelArg
     * @description
     * 
     * This takes an `object` and converts it to a `LocDelArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocDelArg`.
     * @returns {LocDelArg}
     */
    public static _from_object (_o: { [_K in keyof (LocDelArg)]: (LocDelArg)[_K] }): LocDelArg {
        return new LocDelArg(_o.wtmUserId, _o.basicService, _o.argExtension);
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
 * @summary The Leading Root Component Types of LocDelArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocDelArg: $.ComponentSpec[] = [
    new $.ComponentSpec("wtmUserId", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of LocDelArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocDelArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocDelArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocDelArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocDelArg: $.ASN1Decoder<LocDelArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocDelArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocDelArg (el: _Element): LocDelArg {
    if (!_cached_decoder_for_LocDelArg) { _cached_decoder_for_LocDelArg = function (el: _Element): LocDelArg {
    let wtmUserId!: WtmUserId;
    let basicService: OPTIONAL<BasicService> = LocDelArg._default_value_for_basicService;
    let argExtension: OPTIONAL<LrExtension>;
    const callbacks: $.DecodingMap = {
        "wtmUserId": (_el: _Element): void => { wtmUserId = _decode_WtmUserId(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_LrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocDelArg,
        _extension_additions_list_spec_for_LocDelArg,
        _root_component_type_list_2_spec_for_LocDelArg,
        undefined,
    );
    return new LocDelArg(
        wtmUserId,
        basicService,
        argExtension
    );
}; }
    return _cached_decoder_for_LocDelArg(el);
}

let _cached_encoder_for_LocDelArg: $.ASN1Encoder<LocDelArg> | null = null;

/**
 * @summary Encodes a(n) LocDelArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocDelArg, encoded as an ASN.1 Element.
 */
export
function _encode_LocDelArg (value: LocDelArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocDelArg) { _cached_encoder_for_LocDelArg = function (value: LocDelArg, elGetter: $.ASN1Encoder<LocDelArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtmUserId(value.wtmUserId, $.BER));
    if (value.basicService !== undefined && !$.deepEq(value.basicService, LocDelArg._default_value_for_basicService)) {
        _components.push(/* IF_DEFAULT */ _encode_BasicService(value.basicService, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_LrExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LocDelArg(value, elGetter);
}


/* eslint-enable */
