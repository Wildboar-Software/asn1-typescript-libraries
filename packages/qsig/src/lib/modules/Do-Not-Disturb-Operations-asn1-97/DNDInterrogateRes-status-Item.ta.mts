/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_BasicService, _encode_BasicService, _enum_for_BasicService, BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { _decode_DNDProtectionLevel, _encode_DNDProtectionLevel, _enum_for_DNDProtectionLevel, DNDProtectionLevel } from "../Do-Not-Disturb-Operations-asn1-97/DNDProtectionLevel.ta.mjs";

/**
 * @summary DNDInterrogateRes_status_Item
 * @description
 *
 * One basic service for which SS-DND is active, and optionally its
 * DNDPL (ECMA-193 §6.2.2.1.3, §8.2.1.8 NOTE 29, NOTE 33).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDInterrogateRes-status-Item ::= SEQUENCE {
 *     basicService BasicService,
 *     dndProtectionLevel DNDProtectionLevel OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DNDInterrogateRes_status_Item {
    /**
     * @summary `basicService`.
     * @description
     *
     * A basic service for which SS-DND is active
     * (ECMA-193 §8.2.1.8 NOTE 29).
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `dndProtectionLevel`.
     * @description
     *
     * DNDPL of that basic service. The interrogation response may
     * include it; ECMA-193 does not require it (§6.2.2.1.3,
     * §8.2.1.8 NOTE 33).
     * @public
     * @readonly
     */
    readonly dndProtectionLevel: OPTIONAL<DNDProtectionLevel>;

    constructor (
        basicService: BasicService,
        dndProtectionLevel?: OPTIONAL<DNDProtectionLevel>
    ) {
        this.basicService = basicService;
        this.dndProtectionLevel = dndProtectionLevel;
    }

    /**
     * @summary Restructures an object into a DNDInterrogateRes_status_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DNDInterrogateRes_status_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNDInterrogateRes_status_Item`.
     * @returns {DNDInterrogateRes_status_Item}
     */
    public static _from_object (_o: { [_K in keyof (DNDInterrogateRes_status_Item)]: (DNDInterrogateRes_status_Item)[_K] }): DNDInterrogateRes_status_Item {
        return new DNDInterrogateRes_status_Item(_o.basicService, _o.dndProtectionLevel);
    }

        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;        /**
         * @summary The enum used as the type of the component `dndProtectionLevel`
         * @public
         * @static
         */

    public static _enum_for_dndProtectionLevel = _enum_for_DNDProtectionLevel;
}

/**
 * @summary The Leading Root Component Types of DNDInterrogateRes_status_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNDInterrogateRes_status_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("dndProtectionLevel", true, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of DNDInterrogateRes_status_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNDInterrogateRes_status_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNDInterrogateRes_status_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNDInterrogateRes_status_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNDInterrogateRes_status_Item: $.ASN1Decoder<DNDInterrogateRes_status_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDInterrogateRes_status_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDInterrogateRes_status_Item (el: _Element): DNDInterrogateRes_status_Item {
    if (!_cached_decoder_for_DNDInterrogateRes_status_Item) { _cached_decoder_for_DNDInterrogateRes_status_Item = function (el: _Element): DNDInterrogateRes_status_Item {
    let basicService!: BasicService;
    let dndProtectionLevel: OPTIONAL<DNDProtectionLevel>;
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "dndProtectionLevel": (_el: _Element): void => { dndProtectionLevel = _decode_DNDProtectionLevel(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNDInterrogateRes_status_Item,
        _extension_additions_list_spec_for_DNDInterrogateRes_status_Item,
        _root_component_type_list_2_spec_for_DNDInterrogateRes_status_Item,
        undefined,
    );
    return new DNDInterrogateRes_status_Item(
        basicService,
        dndProtectionLevel
    );
}; }
    return _cached_decoder_for_DNDInterrogateRes_status_Item(el);
}

let _cached_encoder_for_DNDInterrogateRes_status_Item: $.ASN1Encoder<DNDInterrogateRes_status_Item> | null = null;

/**
 * @summary Encodes a(n) DNDInterrogateRes_status_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDInterrogateRes_status_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DNDInterrogateRes_status_Item (value: DNDInterrogateRes_status_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDInterrogateRes_status_Item) { _cached_encoder_for_DNDInterrogateRes_status_Item = function (value: DNDInterrogateRes_status_Item, _elGetter: $.ASN1Encoder<DNDInterrogateRes_status_Item>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    if (value.dndProtectionLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNDProtectionLevel(value.dndProtectionLevel, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNDInterrogateRes_status_Item(value, elGetter);
}

/* eslint-enable */
