/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type IA5String,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_DocumentStoreSyntax_method, _encode_DocumentStoreSyntax_method, type DocumentStoreSyntax_method } from "../Thorn/DocumentStoreSyntax-method.ta.mjs";


/**
 * @summary DocumentStoreSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentStoreSyntax ::= SEQUENCE {
 *     method                  INTEGER { ftp(0), ftam(1) },
 *     textEncodedHostName     IA5String,
 *     directoryName           [0] IA5String OPTIONAL,
 *     fileFsName              IA5String,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class DocumentStoreSyntax {
    /**
     * @summary `method`.
     * @public
     * @readonly
     */
    readonly method: DocumentStoreSyntax_method;
    /**
     * @summary `textEncodedHostName`.
     * @public
     * @readonly
     */
    readonly textEncodedHostName: IA5String;
    /**
     * @summary `directoryName`.
     * @public
     * @readonly
     */
    readonly directoryName: OPTIONAL<IA5String>;
    /**
     * @summary `fileFsName`.
     * @public
     * @readonly
     */
    readonly fileFsName: IA5String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        method: DocumentStoreSyntax_method,
        textEncodedHostName: IA5String,
        directoryName: OPTIONAL<IA5String>,
        fileFsName: IA5String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.method = method;
        this.textEncodedHostName = textEncodedHostName;
        this.directoryName = directoryName;
        this.fileFsName = fileFsName;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DocumentStoreSyntax
     * @description
     * 
     * This takes an `object` and converts it to a `DocumentStoreSyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DocumentStoreSyntax`.
     * @returns {DocumentStoreSyntax}
     */
    public static _from_object (_o: { [_K in keyof (DocumentStoreSyntax)]: (DocumentStoreSyntax)[_K] }): DocumentStoreSyntax {
        return new DocumentStoreSyntax(_o.method, _o.textEncodedHostName, _o.directoryName, _o.fileFsName, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DocumentStoreSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DocumentStoreSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("method", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("textEncodedHostName", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("directoryName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fileFsName", false, $.hasTag(_TagClass.universal, 22))
];

/**
 * @summary The Trailing Root Component Types of DocumentStoreSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DocumentStoreSyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DocumentStoreSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DocumentStoreSyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DocumentStoreSyntax: $.ASN1Decoder<DocumentStoreSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DocumentStoreSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DocumentStoreSyntax (el: _Element): DocumentStoreSyntax {
    if (!_cached_decoder_for_DocumentStoreSyntax) { _cached_decoder_for_DocumentStoreSyntax = function (el: _Element): DocumentStoreSyntax {
    let method!: DocumentStoreSyntax_method;
    let textEncodedHostName!: IA5String;
    let directoryName: OPTIONAL<IA5String>;
    let fileFsName!: IA5String;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "method": (_el: _Element): void => { method = _decode_DocumentStoreSyntax_method(_el); },
        "textEncodedHostName": (_el: _Element): void => { textEncodedHostName = $._decodeIA5String(_el); },
        "directoryName": (_el: _Element): void => { directoryName = $._decode_explicit<IA5String>(() => $._decodeIA5String)(_el); },
        "fileFsName": (_el: _Element): void => { fileFsName = $._decodeIA5String(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DocumentStoreSyntax,
        _extension_additions_list_spec_for_DocumentStoreSyntax,
        _root_component_type_list_2_spec_for_DocumentStoreSyntax,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DocumentStoreSyntax(
        method,
        textEncodedHostName,
        directoryName,
        fileFsName,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DocumentStoreSyntax(el);
}

let _cached_encoder_for_DocumentStoreSyntax: $.ASN1Encoder<DocumentStoreSyntax> | null = null;

/**
 * @summary Encodes a(n) DocumentStoreSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentStoreSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_DocumentStoreSyntax (value: DocumentStoreSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DocumentStoreSyntax) { _cached_encoder_for_DocumentStoreSyntax = function (value: DocumentStoreSyntax, elGetter: $.ASN1Encoder<DocumentStoreSyntax>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_DocumentStoreSyntax_method(value.method, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encodeIA5String(value.textEncodedHostName, $.BER);
    if (value.directoryName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.directoryName, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encodeIA5String(value.fileFsName, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DocumentStoreSyntax(value, elGetter);
}


/* eslint-enable */

