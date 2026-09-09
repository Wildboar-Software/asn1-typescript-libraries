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
import { type Cause, _decode_Cause, _encode_Cause } from "../CAP-datatypes/Cause.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";


/**
 * @summary DisconnectLegArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisconnectLegArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     legToBeReleased            [0]    LegID,
 *     releaseCause            [1]    Cause {bound}                OPTIONAL,
 *     extensions                [2]    Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class DisconnectLegArg {
    constructor (
        /**
         * @summary `legToBeReleased`.
         * @public
         * @readonly
         */
        readonly legToBeReleased: LegID,
        /**
         * @summary `releaseCause`.
         * @public
         * @readonly
         */
        readonly releaseCause: OPTIONAL<Cause>,
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
     * @summary Restructures an object into a DisconnectLegArg
     * @description
     * 
     * This takes an `object` and converts it to a `DisconnectLegArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisconnectLegArg`.
     * @returns {DisconnectLegArg}
     */
    public static _from_object (_o: { [_K in keyof (DisconnectLegArg)]: (DisconnectLegArg)[_K] }): DisconnectLegArg {
        return new DisconnectLegArg(_o.legToBeReleased, _o.releaseCause, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DisconnectLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisconnectLegArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legToBeReleased", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DisconnectLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisconnectLegArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisconnectLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisconnectLegArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisconnectLegArg: $.ASN1Decoder<DisconnectLegArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisconnectLegArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisconnectLegArg (el: _Element): DisconnectLegArg {
    if (!_cached_decoder_for_DisconnectLegArg) { _cached_decoder_for_DisconnectLegArg = function (el: _Element): DisconnectLegArg {
    let legToBeReleased!: LegID;
    let releaseCause: OPTIONAL<Cause>;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legToBeReleased": (_el: _Element): void => { legToBeReleased = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DisconnectLegArg,
        _extension_additions_list_spec_for_DisconnectLegArg,
        _root_component_type_list_2_spec_for_DisconnectLegArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DisconnectLegArg(
        legToBeReleased,
        releaseCause,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DisconnectLegArg(el);
}

let _cached_encoder_for_DisconnectLegArg: $.ASN1Encoder<DisconnectLegArg> | null = null;

/**
 * @summary Encodes a(n) DisconnectLegArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisconnectLegArg, encoded as an ASN.1 Element.
 */
export
function _encode_DisconnectLegArg (value: DisconnectLegArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisconnectLegArg) { _cached_encoder_for_DisconnectLegArg = function (value: DisconnectLegArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legToBeReleased, $.BER),
            /* IF_ABSENT  */ ((value.releaseCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Cause, $.BER)(value.releaseCause, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DisconnectLegArg(value, elGetter);
}


/* eslint-enable */
