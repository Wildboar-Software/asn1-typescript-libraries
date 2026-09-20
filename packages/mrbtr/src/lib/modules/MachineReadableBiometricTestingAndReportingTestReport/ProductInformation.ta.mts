/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
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
import { Provider, _decode_Provider, _encode_Provider } from "../MachineReadableBiometricTestingAndReportingTestReport/Provider.ta.mjs";
import { NameProduct, _decode_NameProduct, _encode_NameProduct } from "../MachineReadableBiometricTestingAndReportingTestReport/NameProduct.ta.mjs";
import { Function, _enum_for_Function, _decode_Function, _encode_Function } from "../MachineReadableBiometricTestingAndReportingTestReport/Function.ta.mjs";
import { DataType, _decode_DataType, _encode_DataType } from "../MachineReadableBiometricTestingAndReportingTestReport/DataType.ta.mjs";
import { Modality, _decode_Modality, _encode_Modality } from "../MachineReadableBiometricTestingAndReportingTestReport/Modality.ta.mjs";


/**
 * @summary ProductInformation
 * @description
 *
 * Tested biometric product / IUT (Clause 6.4.2.1). A target may be an
 * assembly of components (Annex B.4). Common-element discussion:
 * Annex B.4 Table B.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProductInformation ::= SEQUENCE {
 *     provider        Provider,
 *     nameProduct     NameProduct,
 *     description     VisibleString OPTIONAL,
 *     functionProduct SEQUENCE OF Function,
 *     outputProduct   DataType OPTIONAL,
 *     modalityProduct Modality
 * }
 * ```
 * 
 * @class
 */
export
class ProductInformation {
    constructor (
        /**
         * @summary `provider`.
         * @description
         *
         * Manufacturer or supplier of the component under test
         * (Clause 6.4.2.2, Annex B.3).
         *
         * @public
         * @readonly
         */
        readonly provider: Provider,
        /**
         * @summary `nameProduct`.
         * @description
         *
         * Model identity and product, software, and firmware versions
         * (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly nameProduct: NameProduct,
        /**
         * @summary `description`.
         * @description
         *
         * Complete unique description of the component. Use for
         * prototypes, experimental models, modalities not listed in
         * ISO/IEC 19785-3, or extra modality detail (e.g. iris in the
         * visible spectrum) (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<VisibleString>,
        /**
         * @summary `functionProduct`.
         * @description
         *
         * One or more functions of the tested product; multifunctional
         * components list several (Clause 6.4.2.3, Annex B.4).
         *
         * @public
         * @readonly
         */
        readonly functionProduct: Function[],
        /**
         * @summary `outputProduct`.
         * @description
         *
         * Processed level and purpose of the product's output
         * (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly outputProduct: OPTIONAL<DataType>,
        /**
         * @summary `modalityProduct`.
         * @description
         *
         * Biometric modality processed by the product. `type` is
         * mandatory if `outputProduct.processedLevel` is neither
         * `comparison-score` nor `comparison-result` (Clause 6.4.2.3).
         *
         * @public
         * @readonly
         */
        readonly modalityProduct: Modality
    ) {}

    /**
     * @summary Restructures an object into a ProductInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ProductInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProductInformation`.
     * @returns {ProductInformation}
     */
    public static _from_object (_o: { [_K in keyof (ProductInformation)]: (ProductInformation)[_K] }): ProductInformation {
        return new ProductInformation(_o.provider, _o.nameProduct, _o.description, _o.functionProduct, _o.outputProduct, _o.modalityProduct);
    }


}

/**
 * @summary The Leading Root Component Types of ProductInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProductInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("provider", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nameProduct", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("functionProduct", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("outputProduct", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("modalityProduct", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ProductInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProductInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProductInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProductInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProductInformation: $.ASN1Decoder<ProductInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProductInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProductInformation (el: _Element): ProductInformation {
    if (!_cached_decoder_for_ProductInformation) { _cached_decoder_for_ProductInformation = function (el: _Element): ProductInformation {
    let provider!: Provider;
    let nameProduct!: NameProduct;
    let description: OPTIONAL<VisibleString>;
    let functionProduct!: Function[];
    let outputProduct: OPTIONAL<DataType>;
    let modalityProduct!: Modality;
    const callbacks: $.DecodingMap = {
        "provider": (_el: _Element): void => { provider = _decode_Provider(_el); },
        "nameProduct": (_el: _Element): void => { nameProduct = _decode_NameProduct(_el); },
        "description": (_el: _Element): void => { description = $._decodeVisibleString(_el); },
        "functionProduct": (_el: _Element): void => { functionProduct = $._decodeSequenceOf<Function>(() => _decode_Function)(_el); },
        "outputProduct": (_el: _Element): void => { outputProduct = _decode_DataType(_el); },
        "modalityProduct": (_el: _Element): void => { modalityProduct = _decode_Modality(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProductInformation,
        _extension_additions_list_spec_for_ProductInformation,
        _root_component_type_list_2_spec_for_ProductInformation,
        undefined,
    );
    return new ProductInformation(
        provider,
        nameProduct,
        description,
        functionProduct,
        outputProduct,
        modalityProduct
    );
}; }
    return _cached_decoder_for_ProductInformation(el);
}

let _cached_encoder_for_ProductInformation: $.ASN1Encoder<ProductInformation> | null = null;

/**
 * @summary Encodes a(n) ProductInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProductInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ProductInformation (value: ProductInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProductInformation) { _cached_encoder_for_ProductInformation = function (value: ProductInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => _encode_Provider, $.BER)(value.provider, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => _encode_NameProduct, $.BER)(value.nameProduct, $.BER),
            /* IF_ABSENT */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.description, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Function>(() => _encode_Function, $.BER), $.BER)(value.functionProduct, $.BER),
            /* IF_ABSENT */ ((value.outputProduct === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_DataType, $.BER)(value.outputProduct, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Modality, $.BER)(value.modalityProduct, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProductInformation(value, elGetter);
}


/* eslint-enable */
