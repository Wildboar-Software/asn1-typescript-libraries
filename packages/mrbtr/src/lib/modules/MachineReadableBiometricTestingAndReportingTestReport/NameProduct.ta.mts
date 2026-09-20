/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
import { Product, _decode_Product, _encode_Product } from "../CBEFF-DATA-ELEMENTS/Product.ta.mjs";
import { VersionProduct, _decode_VersionProduct, _encode_VersionProduct } from "../MachineReadableBiometricTestingAndReportingTestReport/VersionProduct.ta.mjs";


/**
 * @summary NameProduct
 * @description
 *
 * Identity of the tested product (Clause 6.4.2.3). Annex B.4 Table B.2
 * allows model/version to be stated as unknown, unspecified, or unused
 * (e.g. no firmware).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameProduct ::= SEQUENCE {
 *     modelName       Name,
 *     productCBEFF    Product OPTIONAL,
 *     version         VersionProduct,
 *     softwareVersion VersionProduct,
 *     firmwareVersion VersionProduct
 * }
 * ```
 * 
 * @class
 */
export
class NameProduct {
    constructor (
        /**
         * @summary `modelName`.
         * @description
         *
         * Identifies the product (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly modelName: Name,
        /**
         * @summary `productCBEFF`.
         * @description
         *
         * If used, shall conform to ISO/IEC 19785-3. For a product
         * registered with a biometric organization (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly productCBEFF: OPTIONAL<Product>,
        /**
         * @summary `version`.
         * @description
         *
         * Version of the product (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly version: VersionProduct,
        /**
         * @summary `softwareVersion`.
         * @description
         *
         * Version of the product software (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly softwareVersion: VersionProduct,
        /**
         * @summary `firmwareVersion`.
         * @description
         *
         * Version of the product firmware (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly firmwareVersion: VersionProduct
    ) {}

    /**
     * @summary Restructures an object into a NameProduct
     * @description
     * 
     * This takes an `object` and converts it to a `NameProduct`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameProduct`.
     * @returns {NameProduct}
     */
    public static _from_object (_o: { [_K in keyof (NameProduct)]: (NameProduct)[_K] }): NameProduct {
        return new NameProduct(_o.modelName, _o.productCBEFF, _o.version, _o.softwareVersion, _o.firmwareVersion);
    }


}

/**
 * @summary The Leading Root Component Types of NameProduct
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NameProduct: $.ComponentSpec[] = [
    new $.ComponentSpec("modelName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("productCBEFF", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("softwareVersion", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("firmwareVersion", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of NameProduct
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NameProduct: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NameProduct
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NameProduct: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NameProduct: $.ASN1Decoder<NameProduct> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameProduct
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameProduct (el: _Element): NameProduct {
    if (!_cached_decoder_for_NameProduct) { _cached_decoder_for_NameProduct = function (el: _Element): NameProduct {
    let modelName!: Name;
    let productCBEFF: OPTIONAL<Product>;
    let version!: VersionProduct;
    let softwareVersion!: VersionProduct;
    let firmwareVersion!: VersionProduct;
    const callbacks: $.DecodingMap = {
        "modelName": (_el: _Element): void => { modelName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "productCBEFF": (_el: _Element): void => { productCBEFF = _decode_Product(_el); },
        "version": (_el: _Element): void => { version = _decode_VersionProduct(_el); },
        "softwareVersion": (_el: _Element): void => { softwareVersion = _decode_VersionProduct(_el); },
        "firmwareVersion": (_el: _Element): void => { firmwareVersion = _decode_VersionProduct(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NameProduct,
        _extension_additions_list_spec_for_NameProduct,
        _root_component_type_list_2_spec_for_NameProduct,
        undefined,
    );
    return new NameProduct(
        modelName,
        productCBEFF,
        version,
        softwareVersion,
        firmwareVersion
    );
}; }
    return _cached_decoder_for_NameProduct(el);
}

let _cached_encoder_for_NameProduct: $.ASN1Encoder<NameProduct> | null = null;

/**
 * @summary Encodes a(n) NameProduct into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameProduct, encoded as an ASN.1 Element.
 */
export
function _encode_NameProduct (value: NameProduct, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameProduct) { _cached_encoder_for_NameProduct = function (value: NameProduct): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.modelName, $.BER),
            /* IF_ABSENT */ ((value.productCBEFF === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Product, $.BER)(value.productCBEFF, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_VersionProduct, $.BER)(value.version, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 3, () => _encode_VersionProduct, $.BER)(value.softwareVersion, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 4, () => _encode_VersionProduct, $.BER)(value.firmwareVersion, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NameProduct(value, elGetter);
}


/* eslint-enable */
