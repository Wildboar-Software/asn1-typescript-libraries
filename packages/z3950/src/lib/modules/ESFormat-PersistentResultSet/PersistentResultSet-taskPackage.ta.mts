/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServerPart, _decode_ServerPart, _encode_ServerPart } from "../ESFormat-PersistentResultSet/ServerPart.ta.mjs";
// export { ServerPart, _decode_ServerPart, _encode_ServerPart } from "../ESFormat-PersistentResultSet/ServerPart.ta.mjs";


/**
 * @summary PersistentResultSet_taskPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PersistentResultSet-taskPackage ::= SEQUENCE {
 *     clientPart [1] IMPLICIT NULL,
 *     serverPart [2] ServerPart OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PersistentResultSet_taskPackage {
    /**
     * @summary `clientPart`.
     * @public
     * @readonly
     */
    readonly clientPart: NULL;
    /**
     * @summary `serverPart`.
     * @public
     * @readonly
     */
    readonly serverPart: OPTIONAL<ServerPart>;

    constructor (
        clientPart: NULL,
        serverPart: OPTIONAL<ServerPart>
    ) {
        this.clientPart = clientPart;
        this.serverPart = serverPart;
    }

    /**
     * @summary Restructures an object into a PersistentResultSet_taskPackage
     * @description
     * 
     * This takes an `object` and converts it to a `PersistentResultSet_taskPackage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PersistentResultSet_taskPackage`.
     * @returns {PersistentResultSet_taskPackage}
     */
    public static _from_object (_o: { [_K in keyof (PersistentResultSet_taskPackage)]: (PersistentResultSet_taskPackage)[_K] }): PersistentResultSet_taskPackage {
        return new PersistentResultSet_taskPackage(_o.clientPart, _o.serverPart);
    }


}

/**
 * @summary The Leading Root Component Types of PersistentResultSet_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PersistentResultSet_taskPackage: $.ComponentSpec[] = [
    new $.ComponentSpec("clientPart", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverPart", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PersistentResultSet_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PersistentResultSet_taskPackage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PersistentResultSet_taskPackage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PersistentResultSet_taskPackage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PersistentResultSet_taskPackage: $.ASN1Decoder<PersistentResultSet_taskPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PersistentResultSet_taskPackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PersistentResultSet_taskPackage (el: _Element): PersistentResultSet_taskPackage {
    if (!_cached_decoder_for_PersistentResultSet_taskPackage) { _cached_decoder_for_PersistentResultSet_taskPackage = function (el: _Element): PersistentResultSet_taskPackage {
    let clientPart!: NULL;
    let serverPart: OPTIONAL<ServerPart>;
    const callbacks: $.DecodingMap = {
        "clientPart": (_el: _Element): void => { clientPart = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serverPart": (_el: _Element): void => { serverPart = $._decode_explicit<ServerPart>(() => _decode_ServerPart)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PersistentResultSet_taskPackage,
        _extension_additions_list_spec_for_PersistentResultSet_taskPackage,
        _root_component_type_list_2_spec_for_PersistentResultSet_taskPackage,
        undefined,
    );
    return new PersistentResultSet_taskPackage(
        clientPart,
        serverPart
    );
}; }
    return _cached_decoder_for_PersistentResultSet_taskPackage(el);
}

let _cached_encoder_for_PersistentResultSet_taskPackage: $.ASN1Encoder<PersistentResultSet_taskPackage> | null = null;

/**
 * @summary Encodes a(n) PersistentResultSet_taskPackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersistentResultSet_taskPackage, encoded as an ASN.1 Element.
 */
export
function _encode_PersistentResultSet_taskPackage (value: PersistentResultSet_taskPackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PersistentResultSet_taskPackage) { _cached_encoder_for_PersistentResultSet_taskPackage = function (value: PersistentResultSet_taskPackage, elGetter: $.ASN1Encoder<PersistentResultSet_taskPackage>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.clientPart, $.BER);
    if (value.serverPart !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_ServerPart, $.BER)(value.serverPart, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PersistentResultSet_taskPackage(value, elGetter);
}


/* eslint-enable */
