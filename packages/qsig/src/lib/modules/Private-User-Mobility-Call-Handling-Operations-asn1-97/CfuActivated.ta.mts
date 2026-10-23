/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";
import { SubscriptionOption, _decode_SubscriptionOption, _encode_SubscriptionOption, _enum_for_SubscriptionOption } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/SubscriptionOption.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { PumiExtension, _decode_PumiExtension, _encode_PumiExtension } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumiExtension.ta.mjs";

/**
 * @summary CfuActivated
 * @description
 *
 * SS-CFU is active for the called PUM user (ECMA-284 §6.5.3.3). This is
 * the `cfuActivated` choice of `EnquiryRes`. A supporting PUMI-detect
 * PINX then acts as the SS-CFU Served User PINX (ECMA-174 §6.5.4,
 * invoked from ECMA-284 §6.8.6.1).
 * §6.3.1 names these elements and is silent on their contents beyond the ASN.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CfuActivated ::= SEQUENCE {
 *     divToAddress Address,
 *     divOptions SubscriptionOption,
 *     pumName [1] Name OPTIONAL,
 *     argExtension PumiExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CfuActivated {
    /**
     * @summary `divToAddress`.
     * @description
     *
     * Diverted-to address of the active SS-CFU. ECMA-284 §6.3.1 gives this
     * element no further text.
     *
     * @public
     * @readonly
     */
    readonly divToAddress: Address;
    /**
     * @summary `divOptions`.
     * @description
     *
     * Notification subscription for that SS-CFU. See `SubscriptionOption`.
     * ECMA-284 §6.3.1 does not say which value the Home PINX selects.
     *
     * @public
     * @readonly
     */
    readonly divOptions: SubscriptionOption;
    /**
     * @summary `pumName`.
     * @description
     *
     * Name of the PUM user. Optional. ECMA-284 §6.3.1 is silent on when it is
     * included.
     *
     * @public
     * @readonly
     */
    readonly pumName: OPTIONAL<Name>;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific data. `PUMCHExtSet` assigns no extensions (ECMA-284
     * §6.3.1).
     *
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<PumiExtension>;

    constructor (
        divToAddress: Address,
        divOptions: SubscriptionOption,
        pumName?: OPTIONAL<Name>,
        argExtension?: OPTIONAL<PumiExtension>
    ) {
        this.divToAddress = divToAddress;
        this.divOptions = divOptions;
        this.pumName = pumName;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a CfuActivated
     * @description
     * 
     * This takes an `object` and converts it to a `CfuActivated`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CfuActivated`.
     * @returns {CfuActivated}
     */
    public static _from_object (_o: { [_K in keyof (CfuActivated)]: (CfuActivated)[_K] }): CfuActivated {
        return new CfuActivated(_o.divToAddress, _o.divOptions, _o.pumName, _o.argExtension);
    }

        /**
         * @summary The enum used as the type of the component `divOptions`
         * @public
         * @static
         */

    public static _enum_for_divOptions = _enum_for_SubscriptionOption;
}

/**
 * @summary The Leading Root Component Types of CfuActivated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CfuActivated: $.ComponentSpec[] = [
    new $.ComponentSpec("divToAddress", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("divOptions", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("pumName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of CfuActivated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CfuActivated: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CfuActivated
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CfuActivated: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CfuActivated: $.ASN1Decoder<CfuActivated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CfuActivated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CfuActivated (el: _Element): CfuActivated {
    if (!_cached_decoder_for_CfuActivated) { _cached_decoder_for_CfuActivated = function (el: _Element): CfuActivated {
    let divToAddress!: Address;
    let divOptions!: SubscriptionOption;
    let pumName: OPTIONAL<Name>;
    let argExtension: OPTIONAL<PumiExtension>;
    const callbacks: $.DecodingMap = {
        "divToAddress": (_el: _Element): void => { divToAddress = _decode_Address(_el); },
        "divOptions": (_el: _Element): void => { divOptions = _decode_SubscriptionOption(_el); },
        "pumName": (_el: _Element): void => { pumName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_PumiExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CfuActivated,
        _extension_additions_list_spec_for_CfuActivated,
        _root_component_type_list_2_spec_for_CfuActivated,
        undefined,
    );
    return new CfuActivated(
        divToAddress,
        divOptions,
        pumName,
        argExtension
    );
}; }
    return _cached_decoder_for_CfuActivated(el);
}

let _cached_encoder_for_CfuActivated: $.ASN1Encoder<CfuActivated> | null = null;

/**
 * @summary Encodes a(n) CfuActivated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CfuActivated, encoded as an ASN.1 Element.
 */
export
function _encode_CfuActivated (value: CfuActivated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CfuActivated) { _cached_encoder_for_CfuActivated = function (value: CfuActivated, _elGetter: $.ASN1Encoder<CfuActivated>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_Address(value.divToAddress, $.BER));
    _components.push(/* REQUIRED   */ _encode_SubscriptionOption(value.divOptions, $.BER));
    if (value.pumName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_Name, $.BER)(value.pumName, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_PumiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CfuActivated(value, elGetter);
}

/* eslint-enable */
