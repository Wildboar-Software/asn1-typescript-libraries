/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DSAQualitySyntax_serviceQuality, _encode_DSAQualitySyntax_serviceQuality, _enum_for_DSAQualitySyntax_serviceQuality, DSAQualitySyntax_serviceQuality } from "../Thorn/DSAQualitySyntax-serviceQuality.ta.mjs";
// export { DSAQualitySyntax_serviceQuality, _enum_for_DSAQualitySyntax_serviceQuality, DSAQualitySyntax_serviceQuality_defunct /* IMPORTED_LONG_ENUMERATION_ITEM */, defunct /* IMPORTED_SHORT_ENUMERATION_ITEM */, DSAQualitySyntax_serviceQuality_experimental /* IMPORTED_LONG_ENUMERATION_ITEM */, experimental /* IMPORTED_SHORT_ENUMERATION_ITEM */, DSAQualitySyntax_serviceQuality_best_effort /* IMPORTED_LONG_ENUMERATION_ITEM */, best_effort /* IMPORTED_SHORT_ENUMERATION_ITEM */, DSAQualitySyntax_serviceQuality_pilot_service /* IMPORTED_LONG_ENUMERATION_ITEM */, pilot_service /* IMPORTED_SHORT_ENUMERATION_ITEM */, DSAQualitySyntax_serviceQuality_full_service /* IMPORTED_LONG_ENUMERATION_ITEM */, full_service /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DSAQualitySyntax_serviceQuality, _encode_DSAQualitySyntax_serviceQuality } from "../Thorn/DSAQualitySyntax-serviceQuality.ta.mjs";


/**
 * @summary DSAQualitySyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSAQualitySyntax ::= SEQUENCE {
 *     serviceQuality      ENUMERATED {
 *         defunct       (0),
 *         experimental  (1),
 *         best-effort   (2),
 *         pilot-service (3),
 *         full-service  (4) },
 *     description     PrintableString OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class DSAQualitySyntax {
    /**
     * @summary `serviceQuality`.
     * @public
     * @readonly
     */
    readonly serviceQuality: DSAQualitySyntax_serviceQuality;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<PrintableString>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        serviceQuality: DSAQualitySyntax_serviceQuality,
        description: OPTIONAL<PrintableString>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.serviceQuality = serviceQuality;
        this.description = description;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DSAQualitySyntax
     * @description
     * 
     * This takes an `object` and converts it to a `DSAQualitySyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DSAQualitySyntax`.
     * @returns {DSAQualitySyntax}
     */
    public static _from_object (_o: { [_K in keyof (DSAQualitySyntax)]: (DSAQualitySyntax)[_K] }): DSAQualitySyntax {
        return new DSAQualitySyntax(_o.serviceQuality, _o.description, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `serviceQuality`
         * @public
         * @static
         */

    public static _enum_for_serviceQuality: typeof _enum_for_DSAQualitySyntax_serviceQuality = _enum_for_DSAQualitySyntax_serviceQuality;
}

/**
 * @summary The Leading Root Component Types of DSAQualitySyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DSAQualitySyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceQuality", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.universal, 19))
];

/**
 * @summary The Trailing Root Component Types of DSAQualitySyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DSAQualitySyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DSAQualitySyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DSAQualitySyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DSAQualitySyntax: $.ASN1Decoder<DSAQualitySyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSAQualitySyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSAQualitySyntax (el: _Element): DSAQualitySyntax {
    if (!_cached_decoder_for_DSAQualitySyntax) { _cached_decoder_for_DSAQualitySyntax = function (el: _Element): DSAQualitySyntax {
    let serviceQuality!: DSAQualitySyntax_serviceQuality;
    let description: OPTIONAL<PrintableString>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceQuality": (_el: _Element): void => { serviceQuality = _decode_DSAQualitySyntax_serviceQuality(_el); },
        "description": (_el: _Element): void => { description = $._decodePrintableString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DSAQualitySyntax,
        _extension_additions_list_spec_for_DSAQualitySyntax,
        _root_component_type_list_2_spec_for_DSAQualitySyntax,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DSAQualitySyntax(
        serviceQuality,
        description,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DSAQualitySyntax(el);
}

let _cached_encoder_for_DSAQualitySyntax: $.ASN1Encoder<DSAQualitySyntax> | null = null;

/**
 * @summary Encodes a(n) DSAQualitySyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAQualitySyntax, encoded as an ASN.1 Element.
 */
export
function _encode_DSAQualitySyntax (value: DSAQualitySyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSAQualitySyntax) { _cached_encoder_for_DSAQualitySyntax = function (value: DSAQualitySyntax, elGetter: $.ASN1Encoder<DSAQualitySyntax>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_DSAQualitySyntax_serviceQuality(value.serviceQuality, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encodePrintableString(value.description, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DSAQualitySyntax(value, elGetter);
}


/* eslint-enable */
