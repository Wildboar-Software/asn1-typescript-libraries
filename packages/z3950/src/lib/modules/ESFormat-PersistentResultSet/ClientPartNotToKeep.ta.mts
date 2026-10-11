/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ClientPartNotToKeep_replaceOrAppend, _decode_ClientPartNotToKeep_replaceOrAppend, _encode_ClientPartNotToKeep_replaceOrAppend } from "../ESFormat-PersistentResultSet/ClientPartNotToKeep-replaceOrAppend.ta.mjs";


/**
 * @summary ClientPartNotToKeep
 * @description
 * 
 * The transient result set to make persistent, and on modify whether to
 * replace the saved result set or append to it. Not retained. The result
 * set name is mandatory unless the function is delete. Replace-or-append
 * occurs only when the function is modify.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep ::= SEQUENCE{
 *     clientSuppliedResultSet [1] IMPLICIT InternationalString OPTIONAL,
 *     -- Name of transient result set, supplied on request,
 *     -- mandatory unless function is 'delete'
 *     replaceOrAppend         [2] IMPLICIT INTEGER { -- Only if function is "modify"
 *         replace(1),
 *         append(2)
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ClientPartNotToKeep {
    /**
     * @summary `clientSuppliedResultSet`.
     * @description
     * 
     * Name of a transient result set on this Z-association. On create, the
     * server makes a persistent result set from it. On modify, the server
     * replaces the persistent result set or appends this result set to it.
     * Mandatory when the function is create or modify; omitted when the
     * function is delete.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.1.
     * 
     * @public
     * @readonly
     */
    readonly clientSuppliedResultSet: OPTIONAL<InternationalString>;
    /**
     * @summary `replaceOrAppend`.
     * @description
     * 
     * On modify only, and only when the user has modify-contents permission:
     * `replace` means the named result set replaces the persistent result set;
     * `append` means it is appended.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.1.
     * 
     * @public
     * @readonly
     */
    readonly replaceOrAppend: OPTIONAL<ClientPartNotToKeep_replaceOrAppend>;

    constructor (
        clientSuppliedResultSet: OPTIONAL<InternationalString>,
        replaceOrAppend: OPTIONAL<ClientPartNotToKeep_replaceOrAppend>
    ) {
        this.clientSuppliedResultSet = clientSuppliedResultSet;
        this.replaceOrAppend = replaceOrAppend;
    }

    /**
     * @summary Restructures an object into a ClientPartNotToKeep
     * @description
     * 
     * This takes an `object` and converts it to a `ClientPartNotToKeep`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClientPartNotToKeep`.
     * @returns {ClientPartNotToKeep}
     */
    public static _from_object (_o: { [_K in keyof (ClientPartNotToKeep)]: (ClientPartNotToKeep)[_K] }): ClientPartNotToKeep {
        return new ClientPartNotToKeep(_o.clientSuppliedResultSet, _o.replaceOrAppend);
    }


}

/**
 * @summary The Leading Root Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    new $.ComponentSpec("clientSuppliedResultSet", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("replaceOrAppend", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ClientPartNotToKeep
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ClientPartNotToKeep: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ClientPartNotToKeep: $.ASN1Decoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep (el: _Element): ClientPartNotToKeep {
    if (!_cached_decoder_for_ClientPartNotToKeep) { _cached_decoder_for_ClientPartNotToKeep = function (el: _Element): ClientPartNotToKeep {
    let clientSuppliedResultSet: OPTIONAL<InternationalString>;
    let replaceOrAppend: OPTIONAL<ClientPartNotToKeep_replaceOrAppend>;
    const callbacks: $.DecodingMap = {
        "clientSuppliedResultSet": (_el: _Element): void => { clientSuppliedResultSet = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "replaceOrAppend": (_el: _Element): void => { replaceOrAppend = $._decode_implicit<ClientPartNotToKeep_replaceOrAppend>(() => _decode_ClientPartNotToKeep_replaceOrAppend)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClientPartNotToKeep,
        _extension_additions_list_spec_for_ClientPartNotToKeep,
        _root_component_type_list_2_spec_for_ClientPartNotToKeep,
        undefined,
    );
    return new ClientPartNotToKeep(
        clientSuppliedResultSet,
        replaceOrAppend
    );
}; }
    return _cached_decoder_for_ClientPartNotToKeep(el);
}

let _cached_encoder_for_ClientPartNotToKeep: $.ASN1Encoder<ClientPartNotToKeep> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep) { _cached_encoder_for_ClientPartNotToKeep = function (value: ClientPartNotToKeep, elGetter: $.ASN1Encoder<ClientPartNotToKeep>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.clientSuppliedResultSet !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.clientSuppliedResultSet, $.BER);
    }
    if (value.replaceOrAppend !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ClientPartNotToKeep_replaceOrAppend, $.BER)(value.replaceOrAppend, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ClientPartNotToKeep(value, elGetter);
}


/* eslint-enable */
