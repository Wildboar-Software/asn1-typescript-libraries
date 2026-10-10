/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ServerPart
 * @description
 * 
 * Server parameters of a persistent result set, supplied when the task
 * package is presented. Not included on an ES response.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart ::= SEQUENCE{
 *     serverSuppliedResultSet [1] IMPLICIT InternationalString OPTIONAL,
 *                     --Name of transient result set, supplied by server,
 *                     --representing the persistent result set to which
 *                     --package pertains. Meaningful only when package is
 *                     --presented. (i.e. not on ES response).
 *     numberOfRecords         [2] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServerPart {
    /**
     * @summary `serverSuppliedResultSet`.
     * @description
     * 
     * Name of a transient result set on this Z-association, a copy of the
     * persistent result set this package represents. The server includes it
     * only when the package is retrieved, not on an ES response, and omits it
     * when the Present element set says not to include it. The name may be
     * used anywhere a result-set name may be used.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.1.
     * 
     * @public
     * @readonly
     */
    readonly serverSuppliedResultSet: OPTIONAL<InternationalString>;
    /**
     * @summary `numberOfRecords`.
     * @description
     * 
     * Total number of records in the persistent result set. Optional.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.1.
     * 
     * @public
     * @readonly
     */
    readonly numberOfRecords: OPTIONAL<INTEGER>;

    constructor (
        serverSuppliedResultSet: OPTIONAL<InternationalString>,
        numberOfRecords: OPTIONAL<INTEGER>
    ) {
        this.serverSuppliedResultSet = serverSuppliedResultSet;
        this.numberOfRecords = numberOfRecords;
    }

    /**
     * @summary Restructures an object into a ServerPart
     * @description
     * 
     * This takes an `object` and converts it to a `ServerPart`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerPart`.
     * @returns {ServerPart}
     */
    public static _from_object (_o: { [_K in keyof (ServerPart)]: (ServerPart)[_K] }): ServerPart {
        return new ServerPart(_o.serverSuppliedResultSet, _o.numberOfRecords);
    }


}

/**
 * @summary The Leading Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerPart: $.ComponentSpec[] = [
    new $.ComponentSpec("serverSuppliedResultSet", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfRecords", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerPart: $.ASN1Decoder<ServerPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerPart (el: _Element): ServerPart {
    if (!_cached_decoder_for_ServerPart) { _cached_decoder_for_ServerPart = function (el: _Element): ServerPart {
    let serverSuppliedResultSet: OPTIONAL<InternationalString>;
    let numberOfRecords: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "serverSuppliedResultSet": (_el: _Element): void => { serverSuppliedResultSet = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "numberOfRecords": (_el: _Element): void => { numberOfRecords = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServerPart,
        _extension_additions_list_spec_for_ServerPart,
        _root_component_type_list_2_spec_for_ServerPart,
        undefined,
    );
    return new ServerPart(
        serverSuppliedResultSet,
        numberOfRecords
    );
}; }
    return _cached_decoder_for_ServerPart(el);
}

let _cached_encoder_for_ServerPart: $.ASN1Encoder<ServerPart> | null = null;

/**
 * @summary Encodes a(n) ServerPart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart, encoded as an ASN.1 Element.
 */
export
function _encode_ServerPart (value: ServerPart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerPart) { _cached_encoder_for_ServerPart = function (value: ServerPart, elGetter: $.ASN1Encoder<ServerPart>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.serverSuppliedResultSet !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.serverSuppliedResultSet, $.BER);
    }
    if (value.numberOfRecords !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numberOfRecords, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServerPart(value, elGetter);
}


/* eslint-enable */
