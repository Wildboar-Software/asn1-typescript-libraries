/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Addresses, _decode_Addresses, _encode_Addresses } from "../MmsHI2Operations/Addresses.ta.mjs";
// export { Addresses, _decode_Addresses, _encode_Addresses } from "../MmsHI2Operations/Addresses.ta.mjs";
import { From, _decode_From, _encode_From } from "../MmsHI2Operations/From.ta.mjs";
// export { From, _decode_From, _encode_From } from "../MmsHI2Operations/From.ta.mjs";


/**
 * @summary MMSParties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSParties ::= SEQUENCE
 * {
 *     toAddresses        [1] Addresses OPTIONAL,
 *     cCAddresses        [2]    Addresses OPTIONAL,
 *     bCCAddresses    [3] Addresses OPTIONAL,
 *     fromAddresses    [4] From OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MMSParties {
    /**
     * @summary `toAddresses`.
     * @public
     * @readonly
     */
    readonly toAddresses: OPTIONAL<Addresses>;
    /**
     * @summary `cCAddresses`.
     * @public
     * @readonly
     */
    readonly cCAddresses: OPTIONAL<Addresses>;
    /**
     * @summary `bCCAddresses`.
     * @public
     * @readonly
     */
    readonly bCCAddresses: OPTIONAL<Addresses>;
    /**
     * @summary `fromAddresses`.
     * @public
     * @readonly
     */
    readonly fromAddresses: OPTIONAL<From>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        toAddresses: OPTIONAL<Addresses>,
        cCAddresses: OPTIONAL<Addresses>,
        bCCAddresses: OPTIONAL<Addresses>,
        fromAddresses: OPTIONAL<From>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.toAddresses = toAddresses;
        this.cCAddresses = cCAddresses;
        this.bCCAddresses = bCCAddresses;
        this.fromAddresses = fromAddresses;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSParties
     * @description
     * 
     * This takes an `object` and converts it to a `MMSParties`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSParties`.
     * @returns {MMSParties}
     */
    public static _from_object (_o: { [_K in keyof (MMSParties)]: (MMSParties)[_K] }): MMSParties {
        return new MMSParties(_o.toAddresses, _o.cCAddresses, _o.bCCAddresses, _o.fromAddresses, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MMSParties
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSParties: $.ComponentSpec[] = [
    new $.ComponentSpec("toAddresses", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cCAddresses", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("bCCAddresses", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fromAddresses", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MMSParties
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSParties: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSParties
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSParties: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSParties: $.ASN1Decoder<MMSParties> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSParties
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSParties (el: _Element): MMSParties {
    if (!_cached_decoder_for_MMSParties) { _cached_decoder_for_MMSParties = function (el: _Element): MMSParties {
    let toAddresses: OPTIONAL<Addresses>;
    let cCAddresses: OPTIONAL<Addresses>;
    let bCCAddresses: OPTIONAL<Addresses>;
    let fromAddresses: OPTIONAL<From>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "toAddresses": (_el: _Element): void => { toAddresses = $._decode_implicit<Addresses>(() => _decode_Addresses)(_el); },
        "cCAddresses": (_el: _Element): void => { cCAddresses = $._decode_implicit<Addresses>(() => _decode_Addresses)(_el); },
        "bCCAddresses": (_el: _Element): void => { bCCAddresses = $._decode_implicit<Addresses>(() => _decode_Addresses)(_el); },
        "fromAddresses": (_el: _Element): void => { fromAddresses = $._decode_implicit<From>(() => _decode_From)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSParties,
        _extension_additions_list_spec_for_MMSParties,
        _root_component_type_list_2_spec_for_MMSParties,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMSParties(
        toAddresses,
        cCAddresses,
        bCCAddresses,
        fromAddresses,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMSParties(el);
}

let _cached_encoder_for_MMSParties: $.ASN1Encoder<MMSParties> | null = null;

/**
 * @summary Encodes a(n) MMSParties into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSParties, encoded as an ASN.1 Element.
 */
export
function _encode_MMSParties (value: MMSParties, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSParties) { _cached_encoder_for_MMSParties = function (value: MMSParties, elGetter: $.ASN1Encoder<MMSParties>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.toAddresses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Addresses, $.BER)(value.toAddresses, $.BER);
    }
    if (value.cCAddresses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Addresses, $.BER)(value.cCAddresses, $.BER);
    }
    if (value.bCCAddresses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Addresses, $.BER)(value.bCCAddresses, $.BER);
    }
    if (value.fromAddresses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_From, $.BER)(value.fromAddresses, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSParties(value, elGetter);
}


/* eslint-enable */
