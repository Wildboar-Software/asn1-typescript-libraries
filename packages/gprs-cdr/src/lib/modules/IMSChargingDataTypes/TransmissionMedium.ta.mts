/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransmissionMedium
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransmissionMedium ::= SEQUENCE {
 *    tMR        [0] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    tMU        [1] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TransmissionMedium {
    /**
     * @summary `tMR`.
     * @public
     * @readonly
     */
    readonly tMR: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tMU`.
     * @public
     * @readonly
     */
    readonly tMU: OPTIONAL<OCTET_STRING>;

    constructor (
        tMR: OPTIONAL<OCTET_STRING>,
        tMU: OPTIONAL<OCTET_STRING>
    ) {
        this.tMR = tMR;
        this.tMU = tMU;
    
        if (this.tMR !== undefined && (this.tMR.length !== 1)) {
            throw new ASN1SizeError("TransmissionMedium.tMR violates SIZE constraint");
        }
        if (this.tMU !== undefined && (this.tMU.length !== 1)) {
            throw new ASN1SizeError("TransmissionMedium.tMU violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a TransmissionMedium
     * @description
     * 
     * This takes an `object` and converts it to a `TransmissionMedium`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransmissionMedium`.
     * @returns {TransmissionMedium}
     */
    public static _from_object (_o: { [_K in keyof (TransmissionMedium)]: (TransmissionMedium)[_K] }): TransmissionMedium {
        return new TransmissionMedium(_o.tMR, _o.tMU);
    }


}

/**
 * @summary The Leading Root Component Types of TransmissionMedium
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransmissionMedium: $.ComponentSpec[] = [
    new $.ComponentSpec("tMR", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tMU", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TransmissionMedium
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransmissionMedium: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransmissionMedium
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransmissionMedium: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransmissionMedium: $.ASN1Decoder<TransmissionMedium> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransmissionMedium
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransmissionMedium (el: _Element): TransmissionMedium {
    if (!_cached_decoder_for_TransmissionMedium) { _cached_decoder_for_TransmissionMedium = function (el: _Element): TransmissionMedium {
    let tMR: OPTIONAL<OCTET_STRING>;
    let tMU: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "tMR": (_el: _Element): void => { tMR = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tMU": (_el: _Element): void => { tMU = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TransmissionMedium,
        _extension_additions_list_spec_for_TransmissionMedium,
        _root_component_type_list_2_spec_for_TransmissionMedium,
        undefined,
    );
    return new TransmissionMedium(
        tMR,
        tMU
    );
}; }
    return _cached_decoder_for_TransmissionMedium(el);
}

let _cached_encoder_for_TransmissionMedium: $.ASN1Encoder<TransmissionMedium> | null = null;

/**
 * @summary Encodes a(n) TransmissionMedium into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransmissionMedium, encoded as an ASN.1 Element.
 */
export
function _encode_TransmissionMedium (value: TransmissionMedium, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransmissionMedium) { _cached_encoder_for_TransmissionMedium = function (value: TransmissionMedium, _elGetter: $.ASN1Encoder<TransmissionMedium>): _Element {
    const _components: _Element[] = [];
    if (value.tMR !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.tMR, $.BER));
    }
    if (value.tMU !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.tMU, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TransmissionMedium(value, elGetter);
}


/* eslint-enable */
