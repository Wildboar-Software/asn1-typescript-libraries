/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AttributeStatus, _enum_for_AttributeStatus, _decode_AttributeStatus, _encode_AttributeStatus } from "../PlatformCertificateProfile/AttributeStatus.ta.mjs";
/* START_OF_SYMBOL_DEFINITION Properties */
/**
 * @summary Properties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Properties ::= SEQUENCE {
 *     propertyName        UTF8String (SIZE (1..strmax)),
 *     propertyValue       UTF8String (SIZE (1..strmax)),
 *     status              [0] IMPLICIT AttributeStatus OPTIONAL }
 * ```
 * 
 * @class
 */
export
class Properties {
    constructor (
        /**
         * @summary `propertyName`.
         * @public
         * @readonly
         */
        readonly propertyName: UTF8String,
        /**
         * @summary `propertyValue`.
         * @public
         * @readonly
         */
        readonly propertyValue: UTF8String,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: OPTIONAL<AttributeStatus>
    ) {}

    /**
     * @summary Restructures an object into a Properties
     * @description
     * 
     * This takes an `object` and converts it to a `Properties`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Properties`.
     * @returns {Properties}
     */
    public static _from_object (_o: { [_K in keyof (Properties)]: (Properties)[_K] }): Properties {
        return new Properties(_o.propertyName, _o.propertyValue, _o.status);
    }

        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status = _enum_for_AttributeStatus;
}
/* END_OF_SYMBOL_DEFINITION Properties */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Properties */
/**
 * @summary The Leading Root Component Types of Properties
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Properties: $.ComponentSpec[] = [
    new $.ComponentSpec("propertyName", false, $.hasTag(_TagClass.universal, 12), undefined, undefined),
    new $.ComponentSpec("propertyValue", false, $.hasTag(_TagClass.universal, 12), undefined, undefined),
    new $.ComponentSpec("status", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Properties */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Properties */
/**
 * @summary The Trailing Root Component Types of Properties
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Properties: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Properties */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Properties */
/**
 * @summary The Extension Addition Component Types of Properties
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Properties: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Properties */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Properties */
let _cached_decoder_for_Properties: $.ASN1Decoder<Properties> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Properties */

/* START_OF_SYMBOL_DEFINITION _decode_Properties */
/**
 * @summary Decodes an ASN.1 element into a(n) Properties
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Properties} The decoded data structure.
 */
export
function _decode_Properties (el: _Element) {
    if (!_cached_decoder_for_Properties) { _cached_decoder_for_Properties = function (el: _Element): Properties {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let propertyName!: UTF8String;
    let propertyValue!: UTF8String;
    let status: OPTIONAL<AttributeStatus>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "propertyName": (_el: _Element): void => { propertyName = $._decodeUTF8String(_el); },
        "propertyValue": (_el: _Element): void => { propertyValue = $._decodeUTF8String(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<AttributeStatus>(() => _decode_AttributeStatus)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Properties,
        _extension_additions_list_spec_for_Properties,
        _root_component_type_list_2_spec_for_Properties,
        undefined,
    );
    return new Properties( /* SEQUENCE_CONSTRUCTOR_CALL */
        propertyName,
        propertyValue,
        status
    );
}; }
    return _cached_decoder_for_Properties(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Properties */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Properties */
let _cached_encoder_for_Properties: $.ASN1Encoder<Properties> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Properties */

/* START_OF_SYMBOL_DEFINITION _encode_Properties */
/**
 * @summary Encodes a(n) Properties into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Properties, encoded as an ASN.1 Element.
 */
export
function _encode_Properties (value: Properties, elGetter: $.ASN1Encoder<Properties>) {
    if (!_cached_encoder_for_Properties) { _cached_encoder_for_Properties = function (value: Properties): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeUTF8String(value.propertyName, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.propertyValue, $.BER),
            /* IF_ABSENT  */ ((value.status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AttributeStatus, $.BER)(value.status, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Properties(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Properties */

/* eslint-enable */
