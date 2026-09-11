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
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";



/**
 * @summary CollectInformationArg
 * @description
 * 
 * Argument of CollectInformation. Clause 11.8A.1.1 lists no parameters; the
 * SEQUENCE exists for future extensibility. (3GPP TS 29.078 V19.0.0 clause
 * 11.8A.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectInformationArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     extensions                    [0]    Extensions {bound}    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class CollectInformationArg {
    constructor (
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CollectInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `CollectInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CollectInformationArg`.
     * @returns {CollectInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (CollectInformationArg)]: (CollectInformationArg)[_K] }): CollectInformationArg {
        return new CollectInformationArg(_o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CollectInformationArg: $.ASN1Decoder<CollectInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectInformationArg (el: _Element): CollectInformationArg {
    if (!_cached_decoder_for_CollectInformationArg) { _cached_decoder_for_CollectInformationArg = function (el: _Element): CollectInformationArg {
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CollectInformationArg,
        _extension_additions_list_spec_for_CollectInformationArg,
        _root_component_type_list_2_spec_for_CollectInformationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CollectInformationArg(
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CollectInformationArg(el);
}

let _cached_encoder_for_CollectInformationArg: $.ASN1Encoder<CollectInformationArg> | null = null;

/**
 * @summary Encodes a(n) CollectInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_CollectInformationArg (value: CollectInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectInformationArg) { _cached_encoder_for_CollectInformationArg = function (value: CollectInformationArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CollectInformationArg(value, elGetter);
}


/* eslint-enable */
