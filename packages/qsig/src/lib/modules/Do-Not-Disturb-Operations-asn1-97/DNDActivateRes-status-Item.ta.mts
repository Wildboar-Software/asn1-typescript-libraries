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
 * @summary DNDActivateRes_status_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDActivateRes-status-Item ::= SEQUENCE {
 *     basicService BasicService,
 *     dndProtectionLevel DNDProtectionLevel OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DNDActivateRes_status_Item {
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `dndProtectionLevel`.
     * @public
     * @readonly
     */
    readonly dndProtectionLevel: OPTIONAL<DNDProtectionLevel>;

    constructor (
        basicService: BasicService,
        dndProtectionLevel: OPTIONAL<DNDProtectionLevel>
    ) {
        this.basicService = basicService;
        this.dndProtectionLevel = dndProtectionLevel;
    }

    /**
     * @summary Restructures an object into a DNDActivateRes_status_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DNDActivateRes_status_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNDActivateRes_status_Item`.
     * @returns {DNDActivateRes_status_Item}
     */
    public static _from_object (_o: { [_K in keyof (DNDActivateRes_status_Item)]: (DNDActivateRes_status_Item)[_K] }): DNDActivateRes_status_Item {
        return new DNDActivateRes_status_Item(_o.basicService, _o.dndProtectionLevel);
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
 * @summary The Leading Root Component Types of DNDActivateRes_status_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNDActivateRes_status_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("dndProtectionLevel", true, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of DNDActivateRes_status_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNDActivateRes_status_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNDActivateRes_status_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNDActivateRes_status_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNDActivateRes_status_Item: $.ASN1Decoder<DNDActivateRes_status_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDActivateRes_status_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDActivateRes_status_Item (el: _Element): DNDActivateRes_status_Item {
    if (!_cached_decoder_for_DNDActivateRes_status_Item) { _cached_decoder_for_DNDActivateRes_status_Item = function (el: _Element): DNDActivateRes_status_Item {
    let basicService!: BasicService;
    let dndProtectionLevel: OPTIONAL<DNDProtectionLevel>;
    const callbacks: $.DecodingMap = {
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "dndProtectionLevel": (_el: _Element): void => { dndProtectionLevel = _decode_DNDProtectionLevel(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNDActivateRes_status_Item,
        _extension_additions_list_spec_for_DNDActivateRes_status_Item,
        _root_component_type_list_2_spec_for_DNDActivateRes_status_Item,
        undefined,
    );
    return new DNDActivateRes_status_Item(
        basicService,
        dndProtectionLevel
    );
}; }
    return _cached_decoder_for_DNDActivateRes_status_Item(el);
}

let _cached_encoder_for_DNDActivateRes_status_Item: $.ASN1Encoder<DNDActivateRes_status_Item> | null = null;

/**
 * @summary Encodes a(n) DNDActivateRes_status_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDActivateRes_status_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DNDActivateRes_status_Item (value: DNDActivateRes_status_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDActivateRes_status_Item) { _cached_encoder_for_DNDActivateRes_status_Item = function (value: DNDActivateRes_status_Item, _elGetter: $.ASN1Encoder<DNDActivateRes_status_Item>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    if (value.dndProtectionLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNDProtectionLevel(value.dndProtectionLevel, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNDActivateRes_status_Item(value, elGetter);
}

/* eslint-enable */
