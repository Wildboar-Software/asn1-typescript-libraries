/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type VisibleString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CCCId_sepCCCpair
 * @description
 *
 * The transmit and receive CCC identifiers used when `CCCId` is a separated
 * pair.
 *
 * Each is a `VisibleString` of size 1 to 20, extensible. The `CCCId` module
 * comment requires each to be the 8-character hex form of a 32-bit
 * CCC-Identifier. This edition does not define which stream is transmit and
 * which is receive.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCCId-sepCCCpair ::= SEQUENCE {
 *     sepXmitCCC  [0] VisibleString (SIZE(1..20, ...)),
 *     sepRecvCCC  [1] VisibleString (SIZE(1..20, ...)),
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CCCId_sepCCCpair {
    /**
     * @summary `sepXmitCCC`.
     * @description
     *
     * One CCC identifier of a separated pair. `VisibleString` of size 1 to 20,
     * extensible. The `CCCId` comment requires an 8-character hex encoding of a
     * 32-bit CCC-Identifier. This edition does not define the transmit
     * direction.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly sepXmitCCC: VisibleString;
    /**
     * @summary `sepRecvCCC`.
     * @description
     *
     * One CCC identifier of a separated pair. `VisibleString` of size 1 to 20,
     * extensible. The `CCCId` comment requires an 8-character hex encoding of a
     * 32-bit CCC-Identifier. This edition does not define the receive
     * direction.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     *
     * @public
     * @readonly
     */
    readonly sepRecvCCC: VisibleString;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sepXmitCCC: VisibleString,
        sepRecvCCC: VisibleString,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sepXmitCCC = sepXmitCCC;
        this.sepRecvCCC = sepRecvCCC;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CCCId_sepCCCpair
     * @description
     * 
     * This takes an `object` and converts it to a `CCCId_sepCCCpair`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCCId_sepCCCpair`.
     * @returns {CCCId_sepCCCpair}
     */
    public static _from_object (_o: { [_K in keyof (CCCId_sepCCCpair)]: (CCCId_sepCCCpair)[_K] }): CCCId_sepCCCpair {
        return new CCCId_sepCCCpair(_o.sepXmitCCC, _o.sepRecvCCC, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CCCId_sepCCCpair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCCId_sepCCCpair: $.ComponentSpec[] = [
    new $.ComponentSpec("sepXmitCCC", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sepRecvCCC", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CCCId_sepCCCpair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCCId_sepCCCpair: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCCId_sepCCCpair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCCId_sepCCCpair: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCCId_sepCCCpair: $.ASN1Decoder<CCCId_sepCCCpair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCCId_sepCCCpair
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCCId_sepCCCpair (el: _Element): CCCId_sepCCCpair {
    if (!_cached_decoder_for_CCCId_sepCCCpair) { _cached_decoder_for_CCCId_sepCCCpair = function (el: _Element): CCCId_sepCCCpair {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CCCId-sepCCCpair contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sepXmitCCC";
    sequence[1].name = "sepRecvCCC";
    let sepXmitCCC!: VisibleString;
    let sepRecvCCC!: VisibleString;
    sepXmitCCC = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(sequence[0]);
    sepRecvCCC = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(sequence[1]);
    return new CCCId_sepCCCpair(
        sepXmitCCC,
        sepRecvCCC,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_CCCId_sepCCCpair(el);
}

let _cached_encoder_for_CCCId_sepCCCpair: $.ASN1Encoder<CCCId_sepCCCpair> | null = null;

/**
 * @summary Encodes a(n) CCCId_sepCCCpair into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCCId_sepCCCpair, encoded as an ASN.1 Element.
 */
export
function _encode_CCCId_sepCCCpair (value: CCCId_sepCCCpair, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCCId_sepCCCpair) { _cached_encoder_for_CCCId_sepCCCpair = function (value: CCCId_sepCCCpair, elGetter: $.ASN1Encoder<CCCId_sepCCCpair>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.sepXmitCCC, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.sepRecvCCC, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CCCId_sepCCCpair(value, elGetter);
}


/* eslint-enable */
