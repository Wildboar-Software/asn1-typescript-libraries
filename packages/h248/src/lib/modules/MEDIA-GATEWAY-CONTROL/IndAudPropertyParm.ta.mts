/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
// export { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
import { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";
// export { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";


/**
 * @summary IndAudPropertyParm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudPropertyParm ::= SEQUENCE
 *     {
 *         name                        [0] PkgdName,
 *         ...,
 *         propertyParms                [1] PropertyParm OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudPropertyParm {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: PkgdName,
        /**
         * @summary `propertyParms`.
         * @public
         * @readonly
         */
        readonly propertyParms: OPTIONAL<PropertyParm>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IndAudPropertyParm
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudPropertyParm`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudPropertyParm`.
     * @returns {IndAudPropertyParm}
     */
    public static _from_object (_o: { [_K in keyof (IndAudPropertyParm)]: (IndAudPropertyParm)[_K] }): IndAudPropertyParm {
        return new IndAudPropertyParm(_o.name, _o.propertyParms, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudPropertyParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudPropertyParm: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of IndAudPropertyParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudPropertyParm: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudPropertyParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudPropertyParm: $.ComponentSpec[] = [
    new $.ComponentSpec("propertyParms", true, $.hasTag(_TagClass.context, 1))
];

let _cached_decoder_for_IndAudPropertyParm: $.ASN1Decoder<IndAudPropertyParm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudPropertyParm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudPropertyParm (el: _Element): IndAudPropertyParm {
    if (!_cached_decoder_for_IndAudPropertyParm) { _cached_decoder_for_IndAudPropertyParm = function (el: _Element): IndAudPropertyParm {
    let name!: PkgdName;
    let propertyParms: OPTIONAL<PropertyParm>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<PkgdName>(() => _decode_PkgdName)(_el); },
        "propertyParms": (_el: _Element): void => { propertyParms = $._decode_implicit<PropertyParm>(() => _decode_PropertyParm)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudPropertyParm,
        _extension_additions_list_spec_for_IndAudPropertyParm,
        _root_component_type_list_2_spec_for_IndAudPropertyParm,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudPropertyParm(
        name,
        propertyParms,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudPropertyParm(el);
}

let _cached_encoder_for_IndAudPropertyParm: $.ASN1Encoder<IndAudPropertyParm> | null = null;

/**
 * @summary Encodes a(n) IndAudPropertyParm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudPropertyParm, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudPropertyParm (value: IndAudPropertyParm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudPropertyParm) { _cached_encoder_for_IndAudPropertyParm = function (value: IndAudPropertyParm, elGetter: $.ASN1Encoder<IndAudPropertyParm>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PkgdName, $.BER)(value.name, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.propertyParms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PropertyParm, $.BER)(value.propertyParms, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudPropertyParm(value, elGetter);
}


/* eslint-enable */
