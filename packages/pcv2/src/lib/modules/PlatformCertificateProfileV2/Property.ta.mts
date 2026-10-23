/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { _decode_AttributeStatus, _encode_AttributeStatus, _enum_for_AttributeStatus, AttributeStatus } from "../PlatformCertificateProfileV2/AttributeStatus.ta.mjs";


/**
 * @summary Property
 * @description
 *
 * One platform characteristic recorded as a name and a value. In a delta
 * certificate `status` is present and says whether the property was added,
 * modified, or removed relative to the base certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Property ::= SEQUENCE {
 *     propertyName    UTF8String (SIZE (1..strmax)),
 *     propertyValue   UTF8String (SIZE (1..strmax)),
 *     status          [0] IMPLICIT AttributeStatus OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Property {
    /**
     * @summary `propertyName`.
     * @description
     *
     * Name of the characteristic, length 1..`strmax`. The profile does not
     * define a registry of names.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly propertyName: UTF8String;
    /**
     * @summary `propertyValue`.
     * @description
     *
     * Value of the characteristic, length 1..`strmax`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly propertyValue: UTF8String;
    /**
     * @summary `status`.
     * @description
     *
     * Whether this property was added, modified, or removed. Present on every
     * property in a delta certificate.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.19.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly status: OPTIONAL<AttributeStatus>;

    constructor (
        propertyName: UTF8String,
        propertyValue: UTF8String,
        status: OPTIONAL<AttributeStatus>
    ) {
        this.propertyName = propertyName;
        this.propertyValue = propertyValue;
        this.status = status;
        if (propertyName.length < 1 || propertyName.length > strmax) {
            throw new ASN1SizeError("Property.propertyName violates SIZE (1..strmax)");
        }
        if (propertyValue.length < 1 || propertyValue.length > strmax) {
            throw new ASN1SizeError("Property.propertyValue violates SIZE (1..strmax)");
        }
    }

    /**
     * @summary Restructures an object into a Property
     * @description
     * 
     * This takes an `object` and converts it to a `Property`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Property`.
     * @returns {Property}
     */
    public static _from_object (_o: { [_K in keyof (Property)]: (Property)[_K] }): Property {
        return new Property(_o.propertyName, _o.propertyValue, _o.status);
    }

        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status = _enum_for_AttributeStatus;
}

/**
 * @summary The Leading Root Component Types of Property
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Property: $.ComponentSpec[] = [
    new $.ComponentSpec("propertyName", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("propertyValue", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Property
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Property: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Property
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Property: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Property: $.ASN1Decoder<Property> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Property
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Property (el: _Element): Property {
    if (!_cached_decoder_for_Property) { _cached_decoder_for_Property = function (el: _Element): Property {
    let propertyName!: UTF8String;
    let propertyValue!: UTF8String;
    let status: OPTIONAL<AttributeStatus>;
    const callbacks: $.DecodingMap = {
        "propertyName": (_el: _Element): void => { propertyName = $._decodeUTF8String(_el); },
        "propertyValue": (_el: _Element): void => { propertyValue = $._decodeUTF8String(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<AttributeStatus>(() => _decode_AttributeStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Property,
        _extension_additions_list_spec_for_Property,
        _root_component_type_list_2_spec_for_Property,
        undefined,
    );
    return new Property(
        propertyName,
        propertyValue,
        status
    );
}; }
    return _cached_decoder_for_Property(el);
}

let _cached_encoder_for_Property: $.ASN1Encoder<Property> | null = null;

/**
 * @summary Encodes a(n) Property into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Property, encoded as an ASN.1 Element.
 */
export
function _encode_Property (value: Property, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Property) { _cached_encoder_for_Property = function (value: Property): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeUTF8String(value.propertyName, $.BER));
    _components.push(/* REQUIRED   */ $._encodeUTF8String(value.propertyValue, $.BER));
    if (value.status !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeStatus, $.BER)(value.status, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Property(value, elGetter);
}


/* eslint-enable */
