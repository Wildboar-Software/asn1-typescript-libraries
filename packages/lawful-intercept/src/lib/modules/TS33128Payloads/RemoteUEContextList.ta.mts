/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../TS33128Payloads/RemoteUEContext.ta.mjs";
// export { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../TS33128Payloads/RemoteUEContext.ta.mjs";


/**
 * @summary RemoteUEContextList
 * @description
 * 
 * Provides disconnected target 5G ProSe Remote UE(s) information. Shall contain
 * the target remote UE context list octets if sent in the NAS N1 Remote UE
 * Report message. Defined in TS 24.501 [13] clause 9.11.4.29.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEContextList ::= SEQUENCE
 * {
 *     numberOfRemoteUEContexts [1] INTEGER,
 *     remoteUEContexts         [2] SET OF RemoteUEContext
 * }
 * ```
 * 
 * @class
 */
export
class RemoteUEContextList {
    /**
     * @summary `numberOfRemoteUEContexts`.
     * @public
     * @readonly
     */
    readonly numberOfRemoteUEContexts: INTEGER;
    /**
     * @summary `remoteUEContexts`.
     * @public
     * @readonly
     */
    readonly remoteUEContexts: RemoteUEContext[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        numberOfRemoteUEContexts: INTEGER,
        remoteUEContexts: RemoteUEContext[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.numberOfRemoteUEContexts = numberOfRemoteUEContexts;
        this.remoteUEContexts = remoteUEContexts;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RemoteUEContextList
     * @description
     * 
     * This takes an `object` and converts it to a `RemoteUEContextList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoteUEContextList`.
     * @returns {RemoteUEContextList}
     */
    public static _from_object (_o: { [_K in keyof (RemoteUEContextList)]: (RemoteUEContextList)[_K] }): RemoteUEContextList {
        return new RemoteUEContextList(_o.numberOfRemoteUEContexts, _o.remoteUEContexts, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RemoteUEContextList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RemoteUEContextList: $.ComponentSpec[] = [
    new $.ComponentSpec("numberOfRemoteUEContexts", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteUEContexts", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RemoteUEContextList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RemoteUEContextList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RemoteUEContextList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RemoteUEContextList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RemoteUEContextList: $.ASN1Decoder<RemoteUEContextList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUEContextList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUEContextList (el: _Element): RemoteUEContextList {
    if (!_cached_decoder_for_RemoteUEContextList) { _cached_decoder_for_RemoteUEContextList = function (el: _Element): RemoteUEContextList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RemoteUEContextList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numberOfRemoteUEContexts";
    sequence[1].name = "remoteUEContexts";
    let numberOfRemoteUEContexts!: INTEGER;
    let remoteUEContexts!: RemoteUEContext[];
    numberOfRemoteUEContexts = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    remoteUEContexts = $._decode_implicit<RemoteUEContext[]>(() => $._decodeSetOf<RemoteUEContext>(() => _decode_RemoteUEContext))(sequence[1]);
    return new RemoteUEContextList(
        numberOfRemoteUEContexts,
        remoteUEContexts,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_RemoteUEContextList(el);
}

let _cached_encoder_for_RemoteUEContextList: $.ASN1Encoder<RemoteUEContextList> | null = null;

/**
 * @summary Encodes a(n) RemoteUEContextList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUEContextList, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUEContextList (value: RemoteUEContextList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUEContextList) { _cached_encoder_for_RemoteUEContextList = function (value: RemoteUEContextList, elGetter: $.ASN1Encoder<RemoteUEContextList>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfRemoteUEContexts, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<RemoteUEContext>(() => _encode_RemoteUEContext, $.BER), $.BER)(value.remoteUEContexts, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RemoteUEContextList(value, elGetter);
}


/* eslint-enable */
