/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";
import { SubscriptionOption, _decode_SubscriptionOption, _encode_SubscriptionOption, _enum_for_SubscriptionOption } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/SubscriptionOption.ta.mjs";
import { type Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { type WtmiExtension, _decode_WtmiExtension, _encode_WtmiExtension } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmiExtension.ta.mjs";

/**
 * @summary CfuActivated
 * @description
 *
 * Returned by `wtmiEnquiry` when the WTMI user is in the HDB and SS-CFU is
 * active (ECMA-304 §6.5.3.3). A WTMI-detect PINX that supports §6.8.6.1 stops
 * timer T1 and acts as the Served User PINX for SS-CFU (ECMA-174 §6.5.3).
 * Otherwise the action is an implementation matter (§6.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CfuActivated ::= SEQUENCE {
 *     divToAddress Address,
 *     divOptions SubscriptionOption,
 *     wtmName [1] Name OPTIONAL,
 *     argExtension WtmiExtension OPTIONAL
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
     * Diverted-to address for the active SS-CFU (ECMA-304 §6.3.1, §6.5.3.3).
     * ECMA-304 does not further define it; SS-CFU procedures are in ECMA-174.
     * @public
     * @readonly
     */
    readonly divToAddress: Address;
    /**
     * @summary `divOptions`.
     * @description
     *
     * SS-CFU subscription option accompanying the diverted-to address (ECMA-304
     * §6.3.1). ECMA-304 does not define the notification behaviour.
     * @public
     * @readonly
     */
    readonly divOptions: SubscriptionOption;
    /**
     * @summary `wtmName`.
     * @description
     *
     * Optional name. ECMA-304 §6.3.1 and §6.5.3.3 do not say when the Home PINX
     * includes it.
     * @public
     * @readonly
     */
    readonly wtmName: OPTIONAL<Name>;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-304 §6.3.1 defines no members of
     * `WTMCHExtSet`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<WtmiExtension>;

    constructor (
        divToAddress: Address,
        divOptions: SubscriptionOption,
        wtmName?: OPTIONAL<Name>,
        argExtension?: OPTIONAL<WtmiExtension>
    ) {
        this.divToAddress = divToAddress;
        this.divOptions = divOptions;
        this.wtmName = wtmName;
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
        return new CfuActivated(_o.divToAddress, _o.divOptions, _o.wtmName, _o.argExtension);
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
    new $.ComponentSpec("wtmName", true, $.hasTag(_TagClass.context, 1)),
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
    let wtmName: OPTIONAL<Name>;
    let argExtension: OPTIONAL<WtmiExtension>;
    const callbacks: $.DecodingMap = {
        "divToAddress": (_el: _Element): void => { divToAddress = _decode_Address(_el); },
        "divOptions": (_el: _Element): void => { divOptions = _decode_SubscriptionOption(_el); },
        "wtmName": (_el: _Element): void => { wtmName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_WtmiExtension(_el); }
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
        wtmName,
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
    if (value.wtmName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_Name, $.BER)(value.wtmName, $.BER));
    }
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_WtmiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CfuActivated(value, elGetter);
}

/* eslint-enable */
