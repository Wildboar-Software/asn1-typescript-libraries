/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TSCopyTariffSystem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSCopyTariffSystem ::= SEQUENCE {
 *    oldTS      [0] IMPLICIT INTEGER,
 *    newTS      [1] IMPLICIT INTEGER}
 * ```
 * 
 * @class
 */
export
class TSCopyTariffSystem {
    /**
     * @summary `oldTS`.
     * @public
     * @readonly
     */
    readonly oldTS: INTEGER;
    /**
     * @summary `newTS`.
     * @public
     * @readonly
     */
    readonly newTS: INTEGER;

    constructor (
        oldTS: INTEGER,
        newTS: INTEGER
    ) {
        this.oldTS = oldTS;
        this.newTS = newTS;
    }

    /**
     * @summary Restructures an object into a TSCopyTariffSystem
     * @description
     * 
     * This takes an `object` and converts it to a `TSCopyTariffSystem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSCopyTariffSystem`.
     * @returns {TSCopyTariffSystem}
     */
    public static _from_object (_o: { [_K in keyof (TSCopyTariffSystem)]: (TSCopyTariffSystem)[_K] }): TSCopyTariffSystem {
        return new TSCopyTariffSystem(_o.oldTS, _o.newTS);
    }


}

/**
 * @summary The Leading Root Component Types of TSCopyTariffSystem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSCopyTariffSystem: $.ComponentSpec[] = [
    new $.ComponentSpec("oldTS", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newTS", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TSCopyTariffSystem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSCopyTariffSystem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSCopyTariffSystem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSCopyTariffSystem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSCopyTariffSystem: $.ASN1Decoder<TSCopyTariffSystem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSCopyTariffSystem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSCopyTariffSystem (el: _Element): TSCopyTariffSystem {
    if (!_cached_decoder_for_TSCopyTariffSystem) { _cached_decoder_for_TSCopyTariffSystem = function (el: _Element): TSCopyTariffSystem {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TSCopyTariffSystem contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "oldTS";
    sequence[1].name = "newTS";
    let oldTS!: INTEGER;
    let newTS!: INTEGER;
    oldTS = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    newTS = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new TSCopyTariffSystem(
        oldTS,
        newTS,

    );
}; }
    return _cached_decoder_for_TSCopyTariffSystem(el);
}

let _cached_encoder_for_TSCopyTariffSystem: $.ASN1Encoder<TSCopyTariffSystem> | null = null;

/**
 * @summary Encodes a(n) TSCopyTariffSystem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSCopyTariffSystem, encoded as an ASN.1 Element.
 */
export
function _encode_TSCopyTariffSystem (value: TSCopyTariffSystem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSCopyTariffSystem) { _cached_encoder_for_TSCopyTariffSystem = function (value: TSCopyTariffSystem, elGetter: $.ASN1Encoder<TSCopyTariffSystem>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.oldTS, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.newTS, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TSCopyTariffSystem(value, elGetter);
}


/* eslint-enable */
