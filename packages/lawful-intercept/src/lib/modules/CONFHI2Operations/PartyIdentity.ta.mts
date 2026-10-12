/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSIdentity, _decode_IMSIdentity, _encode_IMSIdentity } from "../CONFHI2Operations/IMSIdentity.ta.mjs";
// export { IMSIdentity, _decode_IMSIdentity, _encode_IMSIdentity } from "../CONFHI2Operations/IMSIdentity.ta.mjs";


/**
 * @summary PartyIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyIdentity ::= SEQUENCE
 * {
 *         
 *         iMPU            [3]    SET OF IMSIdentity  OPTIONAL,
 * 
 *         iMPI            [4]    SET OF IMSIdentity  OPTIONAL,
 *         
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PartyIdentity {
    /**
     * @summary `iMPU`.
     * @public
     * @readonly
     */
    readonly iMPU: OPTIONAL<IMSIdentity[]>;
    /**
     * @summary `iMPI`.
     * @public
     * @readonly
     */
    readonly iMPI: OPTIONAL<IMSIdentity[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMPU: OPTIONAL<IMSIdentity[]>,
        iMPI: OPTIONAL<IMSIdentity[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMPU = iMPU;
        this.iMPI = iMPI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PartyIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `PartyIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartyIdentity`.
     * @returns {PartyIdentity}
     */
    public static _from_object (_o: { [_K in keyof (PartyIdentity)]: (PartyIdentity)[_K] }): PartyIdentity {
        return new PartyIdentity(_o.iMPU, _o.iMPI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PartyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartyIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("iMPU", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMPI", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PartyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartyIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartyIdentity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PartyIdentity: $.ASN1Decoder<PartyIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyIdentity (el: _Element): PartyIdentity {
    if (!_cached_decoder_for_PartyIdentity) { _cached_decoder_for_PartyIdentity = function (el: _Element): PartyIdentity {
    let iMPU: OPTIONAL<IMSIdentity[]>;
    let iMPI: OPTIONAL<IMSIdentity[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMPU": (_el: _Element): void => { iMPU = $._decode_implicit<IMSIdentity[]>(() => $._decodeSetOf<IMSIdentity>(() => _decode_IMSIdentity))(_el); },
        "iMPI": (_el: _Element): void => { iMPI = $._decode_implicit<IMSIdentity[]>(() => $._decodeSetOf<IMSIdentity>(() => _decode_IMSIdentity))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyIdentity,
        _extension_additions_list_spec_for_PartyIdentity,
        _root_component_type_list_2_spec_for_PartyIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PartyIdentity(
        iMPU,
        iMPI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PartyIdentity(el);
}

let _cached_encoder_for_PartyIdentity: $.ASN1Encoder<PartyIdentity> | null = null;

/**
 * @summary Encodes a(n) PartyIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_PartyIdentity (value: PartyIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyIdentity) { _cached_encoder_for_PartyIdentity = function (value: PartyIdentity, elGetter: $.ASN1Encoder<PartyIdentity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.iMPU !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<IMSIdentity>(() => _encode_IMSIdentity, $.BER), $.BER)(value.iMPU, $.BER);
    }
    if (value.iMPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSetOf<IMSIdentity>(() => _encode_IMSIdentity, $.BER), $.BER)(value.iMPI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PartyIdentity(value, elGetter);
}


/* eslint-enable */
